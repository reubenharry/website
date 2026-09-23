// This file implements the JavaScript runtime logic for Haskell
// modules that use JSFFI. It is not an ESM module, but the template
// of one; the post-linker script will copy all contents into a new
// ESM module.

// Manage a mapping from 32-bit ids to actual JavaScript values.
class JSValManager {
  #lastk = 0;
  #kv = new Map();

  newJSVal(v) {
    const k = ++this.#lastk;
    this.#kv.set(k, v);
    return k;
  }

  // A separate has() call to ensure we can store undefined as a value
  // too. Also, unconditionally check this since the check is cheap
  // anyway, if the check fails then there's a use-after-free to be
  // fixed.
  getJSVal(k) {
    if (!this.#kv.has(k)) {
      throw new WebAssembly.RuntimeError(`getJSVal(${k})`);
    }
    return this.#kv.get(k);
  }

  // Check for double free as well.
  freeJSVal(k) {
    if (!this.#kv.delete(k)) {
      throw new WebAssembly.RuntimeError(`freeJSVal(${k})`);
    }
  }
}

// The actual setImmediate() to be used. This is a ESM module top
// level binding and doesn't pollute the globalThis namespace.
//
// To benchmark different setImmediate() implementations in the
// browser, use https://github.com/jphpsf/setImmediate-shim-demo as a
// starting point.
const setImmediate = (() => {
  // node, deno, bun, or other scripts might have set this up in the
  // browser
  if (globalThis.setImmediate) {
    return globalThis.setImmediate;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Scheduler/postTask
  if (globalThis.scheduler) {
    return (cb, ...args) => scheduler.postTask(() => cb(...args));
  }

  // Cloudflare workers doesn't support MessageChannel
  if (globalThis.MessageChannel) {
    // A simple & fast setImmediate() implementation for browsers. It's
    // not a drop-in replacement for node.js setImmediate() because:
    // 1. There's no clearImmediate(), and setImmediate() doesn't return
    //    anything
    // 2. There's no guarantee that callbacks scheduled by setImmediate()
    //    are executed in the same order (in fact it's the opposite lol),
    //    but you are never supposed to rely on this assumption anyway
    class SetImmediate {
      #fs = [];
      #mc = new MessageChannel();

      constructor() {
        this.#mc.port1.addEventListener("message", () => {
          this.#fs.pop()();
        });
        this.#mc.port1.start();
      }

      setImmediate(cb, ...args) {
        this.#fs.push(() => cb(...args));
        this.#mc.port2.postMessage(undefined);
      }
    }

    const sm = new SetImmediate();
    return (cb, ...args) => sm.setImmediate(cb, ...args);
  }

  return (cb, ...args) => setTimeout(cb, 0, ...args);
})();

export default (__exports) => {
const __ghc_wasm_jsffi_jsval_manager = new JSValManager();
const __ghc_wasm_jsffi_finalization_registry = globalThis.FinalizationRegistry ? new FinalizationRegistry(sp => __exports.rts_freeStablePtr(sp)) : { register: () => {}, unregister: () => true };
return {
newJSVal: (v) => __ghc_wasm_jsffi_jsval_manager.newJSVal(v),
getJSVal: (k) => __ghc_wasm_jsffi_jsval_manager.getJSVal(k),
freeJSVal: (k) => __ghc_wasm_jsffi_jsval_manager.freeJSVal(k),
scheduleWork: () => setImmediate(__exports.rts_schedulerLoop),
ZC0ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1) => ($1.textBaseline = 'alphabetic'),
ZC1ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1) => ($1.textAlign = 'left'),
ZC2ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2) => ($1.fillText($2, 0, 0)),
ZC3ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2) => ($1.font = $2),
ZC4ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2,$3) => ($1.lineTo($2, $3)),
ZC5ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2,$3) => ($1.moveTo($2, $3)),
ZC6ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1) => ($1.clip()),
ZC7ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2,$3,$4,$5) => ($1.rect($2, $3, $4, $5)),
ZC8ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2) => {var t=$1.getTransform(); var s=Math.sqrt(Math.abs(t.a*t.d-t.b*t.c)); $1.lineWidth = s===0 ? $2 : ($2/s);},
ZC10ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2) => ($1.strokeStyle = $2),
ZC11ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2) => ($1.fillStyle = $2),
ZC12ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2,$3,$4,$5) => ($1.strokeRect($2, $3, $4, $5)),
ZC13ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2,$3,$4,$5) => ($1.fillRect($2, $3, $4, $5)),
ZC14ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1) => ($1.stroke()),
ZC15ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1) => ($1.fill()),
ZC16ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2) => ($1.arc(0, 0, $2, 0, 2 * Math.PI)),
ZC17ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1) => ($1.closePath()),
ZC18ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1) => ($1.beginPath()),
ZC19ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2) => ($1.rotate($2)),
ZC20ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2,$3) => ($1.scale($2, $3)),
ZC21ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2,$3) => ($1.translate($2, $3)),
ZC22ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1) => ($1.restore()),
ZC23ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1) => ($1.save()),
ZC24ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1,$2,$3) => ($1.clearRect(0, 0, $2, $3)),
ZC25ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1) => ($1.height),
ZC26ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1) => ($1.width),
ZC27ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1) => ($1.getContext('2d')),
ZC28ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCCanvasZC: ($1) => (document.getElementById($1)),
ZC2ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCMainZC: ($1) => (console.log($1)),
ZC3ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCMainZC: ($1) => {document.querySelectorAll('[data-btn]').forEach(function(el){ el.addEventListener('mousedown', function(){ $1(el.getAttribute('data-btn'), true); }); el.addEventListener('mouseup', function(){ $1(el.getAttribute('data-btn'), false); }); el.addEventListener('mouseleave', function(){ $1(el.getAttribute('data-btn'), false); }); });},
ZC4ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCMainZC: ($1,$2) => (document.getElementById($1).addEventListener('mouseup', function(){ $2(0, 0); })),
ZC5ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCMainZC: ($1,$2) => (document.getElementById($1).addEventListener('mousedown', function(e){ var r = e.target.getBoundingClientRect(); $2(e.clientX - r.left, e.clientY - r.top); })),
ZC6ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCMainZC: ($1,$2) => (document.getElementById($1).addEventListener('mousemove', function(e){ var r = e.target.getBoundingClientRect(); $2(e.clientX - r.left, e.clientY - r.top); })),
ZC7ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCMainZC: ($1) => (window.requestAnimationFrame($1)),
ZC9ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCMainZC: ($1) => ((...args) => __exports.ghczuwasmzujsffiZC8ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCMainZC($1, ...args)),
ZC11ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCMainZC: ($1) => ((...args) => __exports.ghczuwasmzujsffiZC10ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCMainZC($1, ...args)),
ZC13ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCMainZC: ($1) => ((...args) => __exports.ghczuwasmzujsffiZC12ZCbrowserzmspikezm0zi1zi0zi0zminplacezmbrowserzmspikeZCMainZC($1, ...args)),
ZC0ZCghczminternalZCGHCziInternalziWasmziPrimziExportsZC: ($1,$2) => ($1.reject(new WebAssembly.RuntimeError($2))),
ZC19ZCghczminternalZCGHCziInternalziWasmziPrimziExportsZC: ($1) => ($1.resolve()),
ZC20ZCghczminternalZCGHCziInternalziWasmziPrimziExportsZC: ($1) => {$1.throwTo = () => {};},
ZC21ZCghczminternalZCGHCziInternalziWasmziPrimziExportsZC: ($1,$2) => {$1.throwTo = (err) => __exports.rts_promiseThrowTo($2, err);},
ZC22ZCghczminternalZCGHCziInternalziWasmziPrimziExportsZC: () => {let res, rej; const p = new Promise((resolve, reject) => { res = resolve; rej = reject; }); p.resolve = res; p.reject = rej; return p;},
ZC23ZCghczminternalZCGHCziInternalziWasmziPrimziExportsZC: ($1,$2) => (__ghc_wasm_jsffi_finalization_registry.register($1, $2, $1)),
ZC0ZCghczminternalZCGHCziInternalziWasmziPrimziTypesZC: ($1) => (`${$1.stack ? $1.stack : $1}`),
ZC1ZCghczminternalZCGHCziInternalziWasmziPrimziTypesZC: ($1,$2) => ((new TextDecoder('utf-8', {fatal: true})).decode(new Uint8Array(__exports.memory.buffer, $1, $2))),
ZC2ZCghczminternalZCGHCziInternalziWasmziPrimziTypesZC: ($1,$2,$3) => ((new TextEncoder()).encodeInto($1, new Uint8Array(__exports.memory.buffer, $2, $3)).written),
ZC3ZCghczminternalZCGHCziInternalziWasmziPrimziTypesZC: ($1) => ($1.length),
ZC4ZCghczminternalZCGHCziInternalziWasmziPrimziTypesZC: ($1) => {try { __ghc_wasm_jsffi_finalization_registry.unregister($1); } catch {}},
ZC18ZCghczminternalZCGHCziInternalziWasmziPrimziImportsZC: ($1,$2) => ($1.then(() => __exports.rts_promiseResolveUnit($2), err => __exports.rts_promiseReject($2, err))),
ZC0ZCghczminternalZCGHCziInternalziWasmziPrimziConcziInternalZC: async ($1) => (new Promise(res => setTimeout(res, $1 / 1000))),
};
};
