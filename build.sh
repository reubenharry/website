#!/usr/bin/env bash
# Full site build: WASM demos (via real-time-inference) + Hakyll → public/
set -euo pipefail
cd "$(dirname "$0")"

SKIP_DEMOS="${SKIP_DEMOS:-0}"
if [[ "$SKIP_DEMOS" != "1" ]]; then
  ./scripts/build-demos.sh
else
  echo "SKIP_DEMOS=1 — reusing static/demos/"
fi

cabal build -j
cabal run site -- rebuild
echo "Site ready in public/"
