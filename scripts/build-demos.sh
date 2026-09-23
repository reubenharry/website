#!/usr/bin/env bash
# Build WASM demos for the site from:
#   1. ```{.haskell demo=ID ...} fences in content/
#   2. website/demos/<id>.hs or website/demos/<id>/Demo.hs
# Artifacts land in static/demos/<id>/{demo.wasm,ghc_wasm_jsffi.js,run.js}
set -euo pipefail

SITE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$SITE_ROOT"

RTI_ROOT="${RTI_ROOT:-}"
if [[ -z "$RTI_ROOT" ]]; then
  for candidate in \
    "$SITE_ROOT/../real-time-inference" \
    "$SITE_ROOT/../../real-time-inference" \
    "$SITE_ROOT/../../../real-time-inference" \
    "$HOME/Documents/real-time-inference"
  do
    if [[ -d "$candidate/browser-spike" ]]; then
      RTI_ROOT="$(cd "$candidate" && pwd)"
      break
    fi
  done
fi

if [[ -z "${RTI_ROOT:-}" || ! -d "$RTI_ROOT/browser-spike" ]]; then
  echo "Could not find real-time-inference (set RTI_ROOT)." >&2
  exit 1
fi

SPIKE="$RTI_ROOT/browser-spike"
GEN="$SITE_ROOT/_demos_build"
OUT_ROOT="$SITE_ROOT/static/demos"
RUN_JS="$SITE_ROOT/scripts/demo-run.js"

# shellcheck disable=SC1091
[[ -f "$HOME/.ghc-wasm/env" ]] && source "$HOME/.ghc-wasm/env"
if ! command -v wasm32-wasi-cabal >/dev/null; then
  echo "GHC WASM toolchain missing (install ghc-wasm-meta, then source ~/.ghc-wasm/env)." >&2
  exit 1
fi

rm -rf "$GEN"
mkdir -p "$GEN" "$OUT_ROOT"

echo "RTI_ROOT=$RTI_ROOT"
echo "Extracting demos from content/…"
python3 "$SITE_ROOT/scripts/extract-demos.py" \
  "$SITE_ROOT/content" \
  -o "$GEN" > "$GEN/manifest.jsonl" || true

# Hand-written demo modules
if [[ -d "$SITE_ROOT/demos" ]]; then
  shopt -s nullglob
  for f in "$SITE_ROOT/demos"/*.hs; do
    id="$(basename "$f" .hs)"
    mkdir -p "$GEN/$id"
    cp "$f" "$GEN/$id/Demo.hs"
    echo "{\"id\":\"$id\",\"path\":\"$GEN/$id/Demo.hs\",\"from\":null,\"source\":\"$f\"}" >> "$GEN/manifest.jsonl"
  done
  for d in "$SITE_ROOT/demos"/*/; do
    [[ -f "$d/Demo.hs" ]] || continue
    id="$(basename "$d")"
    mkdir -p "$GEN/$id"
    cp "$d/Demo.hs" "$GEN/$id/Demo.hs"
    echo "{\"id\":\"$id\",\"path\":\"$GEN/$id/Demo.hs\",\"from\":null,\"source\":\"$d/Demo.hs\"}" >> "$GEN/manifest.jsonl"
  done
  shopt -u nullglob
fi

if [[ ! -s "$GEN/manifest.jsonl" ]]; then
  echo "No demos found; writing default browser-spike from Tutorial.demo1"
  mkdir -p "$GEN/browser-spike"
  cp "$SPIKE/src/Demo.default.hs" "$GEN/browser-spike/Demo.hs"
  echo '{"id":"browser-spike","path":"'"$GEN/browser-spike/Demo.hs"'","from":"Tutorial.demo1","source":"default"}' \
    > "$GEN/manifest.jsonl"
fi

# Deduplicate by id (last wins)
python3 - <<'PY' "$GEN/manifest.jsonl" "$GEN/demos.txt"
import json, sys
from pathlib import Path
src, dst = Path(sys.argv[1]), Path(sys.argv[2])
seen = {}
for line in src.read_text().splitlines():
    line = line.strip()
    if not line:
        continue
    item = json.loads(line)
    seen[item["id"]] = item
dst.write_text("\n".join(json.dumps(v) for v in seen.values()) + ("\n" if seen else ""))
print(f"{len(seen)} demo(s) to build")
PY

built=0
skipped=0
# Hash must include the shared RTI core + WASM host, not just Demo.hs —
# `from=Tutorial.demo1` wrappers never change when Tutorial.hs does.
demo_hash() {
  local demo_hs="$1"
  {
    shasum -a 256 "$demo_hs"
    # Include package cabal (linker --export flags live here).
    [[ -f "$SPIKE/browser-spike.cabal" ]] && shasum -a 256 "$SPIKE/browser-spike.cabal"
    find "$RTI_ROOT/src" "$SPIKE/app" "$SPIKE/src" \
      \( -name '*.hs' -o -name '*.cabal' \) -type f \
      ! -name 'Demo.hs' \
      -print0 | sort -z | xargs -0 shasum -a 256
  } | shasum -a 256 | awk '{print $1}'
}

while IFS= read -r line; do
  [[ -z "$line" ]] && continue
  id="$(python3 -c 'import json,sys; print(json.loads(sys.argv[1])["id"])' "$line")"
  src="$(python3 -c 'import json,sys; print(json.loads(sys.argv[1])["path"])' "$line")"
  dest="$OUT_ROOT/$id"
  mkdir -p "$dest"

  hash="$(demo_hash "$src")"
  from="$(python3 -c 'import json,sys; print(json.loads(sys.argv[1]).get("from") or "")' "$line")"
  if [[ -f "$dest/.sourcehash" && "$(cat "$dest/.sourcehash")" == "$hash" \
        && -f "$dest/demo.wasm" && -f "$dest/ghc_wasm_jsffi.js" && -f "$dest/run.js" ]]; then
    echo "skip $id (unchanged)"
    python3 "$SITE_ROOT/scripts/write-demo-index.py" \
      --out "$dest/index.html" --id "$id" --from "$from"
    skipped=$((skipped + 1))
    continue
  fi

  echo "building ${id}..."
  DEMO_SRC="$src" OUT_DIR="$dest" DEMO_NAME="$id" "$SPIKE/build.sh"
  cp "$RUN_JS" "$dest/run.js"
  python3 "$SITE_ROOT/scripts/write-demo-index.py" \
    --out "$dest/index.html" --id "$id" --from "$from"
  # Site loader uses demo.wasm; drop the spike alias if present
  rm -f "$dest/browser-spike.wasm"
  echo "$hash" > "$dest/.sourcehash"
  built=$((built + 1))
done < "$GEN/demos.txt"

echo "Demos: built=${built} skipped=${skipped} -> ${OUT_ROOT}"
