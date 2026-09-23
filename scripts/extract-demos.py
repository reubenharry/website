#!/usr/bin/env python3
"""Extract Haskell demo fences from markdown into Demo.hs modules.

Fence form (Pandoc attributes):

```{.haskell demo=my-demo}
demo :: UserInput >--> Picture
demo = ...
```

Optional `from=Tutorial.demo1` builds against a library export; the fence body
is still shown in the post but not compiled.

Prints JSON lines: {"id": "...", "path": "...", "from": "..."}
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

FENCE_RE = re.compile(
    r"^```\{(?P<header>[^}]*)\}\s*\n(?P<body>.*?)(?:^```)\s*$",
    re.MULTILINE | re.DOTALL,
)

ATTR_RE = re.compile(
    r"""(?P<key>[A-Za-z][\w-]*)\s*=\s*(?P<val>"[^"]*"|'[^']*'|[^\s}]+)"""
)

PRELUDE = """\
{-# LANGUAGE Arrows #-}
module Demo (demo) where

import Concurrent
import Control.Category ((.))
import Example
import FRP.Rhine hiding (Result)
import Inference
import Numeric.Log (Log)
import Picture (Picture)
import Prelude hiding ((.))
import Tutorial
import Util
import Vec (V2 (..))

"""

FROM_TEMPLATE = """\
module Demo (demo) where

import Concurrent (UserInput)
import Picture (Picture)
import Tutorial ({symbol})
import Util (type (>-->))

demo :: UserInput >--> Picture
demo = {symbol}
"""


def parse_attrs(header: str) -> dict[str, str]:
    attrs: dict[str, str] = {}
    classes: list[str] = []
    demo_id = None
    for tok in header.replace(",", " ").split():
        tok = tok.strip()
        if not tok:
            continue
        if tok.startswith("."):
            classes.append(tok[1:])
            continue
        if tok.startswith("#"):
            demo_id = tok[1:]
            continue
        m = ATTR_RE.fullmatch(tok)
        if m:
            val = m.group("val")
            if val[0] in "\"'" and val[-1] == val[0]:
                val = val[1:-1]
            attrs[m.group("key")] = val
    if "haskell" not in classes and "haskell" not in header:
        # still allow `{demo=foo}` only if class haskell present via .haskell
        pass
    if demo_id and "demo" not in attrs:
        attrs["demo"] = demo_id
    attrs["_classes"] = " ".join(classes)
    return attrs


def resolve_from(expr: str) -> str:
    """Tutorial.demo1 -> demo1 (symbol to import)."""
    if "." in expr:
        return expr.rsplit(".", 1)[-1]
    return expr


def write_demo(out: Path, body: str, from_expr: str | None) -> None:
    out.parent.mkdir(parents=True, exist_ok=True)
    if from_expr:
        symbol = resolve_from(from_expr)
        out.write_text(FROM_TEMPLATE.format(symbol=symbol))
    else:
        text = body.strip("\n")
        if "module Demo" in text:
            out.write_text(text + "\n")
        else:
            out.write_text(PRELUDE + text + "\n")


def extract_file(md: Path, out_dir: Path) -> list[dict]:
    text = md.read_text()
    found: list[dict] = []
    for m in FENCE_RE.finditer(text):
        header = m.group("header")
        attrs = parse_attrs(header)
        classes = attrs.get("_classes", "").split()
        is_haskell = "haskell" in classes or "haskell" in header.split()
        demo_id = attrs.get("demo")
        if not demo_id or not is_haskell:
            continue
        from_expr = attrs.get("from")
        out = out_dir / demo_id / "Demo.hs"
        write_demo(out, m.group("body"), from_expr)
        found.append(
            {
                "id": demo_id,
                "path": str(out),
                "from": from_expr,
                "source": str(md),
            }
        )
    return found


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("roots", nargs="+", type=Path, help="Markdown files or dirs")
    ap.add_argument("-o", "--out-dir", type=Path, required=True)
    args = ap.parse_args()

    files: list[Path] = []
    for root in args.roots:
        if root.is_file():
            files.append(root)
        else:
            files.extend(sorted(root.rglob("*.md")))

    all_found: list[dict] = []
    for md in files:
        all_found.extend(extract_file(md, args.out_dir))

    # Also pick up hand-written demos/<id>.hs or demos/<id>/Demo.hs
    # (handled by the shell script; this tool is markdown-only)

    for item in all_found:
        print(json.dumps(item))
    return 0


if __name__ == "__main__":
    sys.exit(main())
