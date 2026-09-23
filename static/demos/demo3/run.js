import { WASI, File, OpenFile, ConsoleStdout } from "https://cdn.jsdelivr.net/npm/@bjorn3/browser_wasi_shim@0.4.2/dist/index.js";
import createGhcWasmJsffi from "./ghc_wasm_jsffi.js";

const status = document.getElementById("status");

function setStatus(msg) {
  if (status) status.textContent = msg;
}

// Gate the Haskell RAF loop: when off-screen (or tab hidden), don't schedule
// frames. Same-origin iframes can observe window.frameElement.
let running = false;
let rafPending = null;
const nativeRAF = window.requestAnimationFrame.bind(window);
window.requestAnimationFrame = (cb) => {
  if (!running) {
    rafPending = cb;
    return 0;
  }
  return nativeRAF((t) => {
    if (!running) {
      rafPending = cb;
      return;
    }
    cb(t);
  });
};

function setRunning(on) {
  if (on === running) return;
  running = on;
  if (on) {
    if (rafPending) {
      const cb = rafPending;
      rafPending = null;
      nativeRAF(cb);
    }
  } else {
    setStatus("Paused (off-screen).");
  }
}

function watchVisibility(onChange) {
  const target = window.frameElement || document.getElementById("sim");
  let intersecting = !window.frameElement; // standalone page: treat as visible

  const sync = () => onChange(intersecting && !document.hidden);

  if (target && typeof IntersectionObserver !== "undefined") {
    const io = new IntersectionObserver(
      ([entry]) => {
        intersecting = Boolean(entry?.isIntersecting);
        sync();
      },
      { root: null, threshold: 0.05, rootMargin: "80px 0px" }
    );
    io.observe(target);
  }

  document.addEventListener("visibilitychange", sync);
  sync();
}

try {
  setStatus("Loading WASM…");
  const wasmResponse = await fetch(new URL("./demo.wasm", import.meta.url));
  if (!wasmResponse.ok) {
    throw new Error(`Failed to fetch WASM: ${wasmResponse.status}`);
  }
  const wasmBuffer = await wasmResponse.arrayBuffer();

  let exportedFunctions = null;
  const exportsProxy = new Proxy(
    {},
    {
      get(_target, property) {
        if (!exportedFunctions) {
          throw new Error(`WASM exports not ready: ${String(property)}`);
        }
        return exportedFunctions[property];
      },
    }
  );

  const ghcWasmJsffi = createGhcWasmJsffi(exportsProxy);
  const fds = [
    new OpenFile(new File([])),
    ConsoleStdout.lineBuffered((msg) => console.log(msg)),
    ConsoleStdout.lineBuffered((msg) => console.error(msg)),
  ];
  const wasi = new WASI([], [], fds);

  const { instance } = await WebAssembly.instantiate(wasmBuffer, {
    wasi_snapshot_preview1: wasi.wasiImport,
    ghc_wasm_jsffi: ghcWasmJsffi,
  });

  exportedFunctions = instance.exports;
  wasi.inst = instance;

  if (typeof instance.exports._initialize === "function") {
    instance.exports._initialize();
  } else if (typeof instance.exports.hs_init === "function") {
    instance.exports.hs_init();
  }

  // Soft restart: reset automaton + clocks in Haskell (no WASM reload).
  for (const el of document.querySelectorAll("[data-restart]")) {
    el.addEventListener("click", () => {
      if (typeof instance.exports.hs_restartDemo !== "function") {
        setStatus("Restart unavailable.");
        return;
      }
      instance.exports.hs_restartDemo();
      setStatus("Restarted.");
    });
  }

  let started = false;
  watchVisibility((visible) => {
    if (visible) {
      if (!started) {
        started = true;
        setRunning(true);
        instance.exports.hs_startDemo();
        setStatus("Running.");
      } else {
        setRunning(true);
        setStatus("Running.");
      }
    } else if (started) {
      setRunning(false);
    } else {
      setStatus("Waiting until on-screen…");
    }
  });
} catch (err) {
  console.error(err);
  setStatus(`Error: ${err.message}`);
}
