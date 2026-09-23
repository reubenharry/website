#!/usr/bin/env python3
"""Write a self-contained index.html for a WASM demo (iframe host)."""
from __future__ import annotations

import argparse
from pathlib import Path

# Buttons expected by Tutorial.demo0 / demo1 / demo2 (and SimpleConvention).
CONTROLS: dict[str, list[tuple[str, str]]] = {
    "demo0": [("particles", "Toggle particles")],
    "demo1": [
        ("particles", "Toggle particles"),
        ("observations", "Toggle observations"),
        ("prior", "Cycle prior (harmonic / brownian)"),
        ("mouse", "Use mouse"),
    ],
    "demo2": [("communicate", "Toggle communicate")],
}

# Alias used by the browser-spike post.
CONTROLS["browser-spike"] = CONTROLS["demo1"]


def resolve_symbol(from_expr: str | None, demo_id: str) -> str:
    if from_expr and "." in from_expr:
        return from_expr.rsplit(".", 1)[-1]
    if from_expr:
        return from_expr
    return demo_id


def buttons_html(symbol: str, demo_id: str) -> str:
    keys = CONTROLS.get(symbol) or CONTROLS.get(demo_id) or CONTROLS["demo1"]
    return "\n".join(
        f'      <button type="button" data-btn="{key}">{label}</button>'
        for key, label in keys
    )


TEMPLATE = """\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <style>
      html, body {{ margin: 0; padding: 0; background: #faf9f6; color: #111; }}
      body {{
        font-family: "Source Sans 3", "Helvetica Neue", Helvetica, Arial, sans-serif;
        padding: 0.5rem 0.25rem 0.75rem;
      }}
      #sim {{
        display: block;
        max-width: 100%;
        height: auto;
        background: #fff;
        border: 1px solid #c8c8c8;
        cursor: crosshair;
      }}
      .controls {{
        margin-top: 0.75rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }}
      button {{
        font-size: 0.9rem;
        padding: 0.35rem 0.85rem;
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        background: #fff;
        cursor: pointer;
      }}
      button:active {{ background: #eee; }}
      #status {{
        margin-top: 0.5rem;
        color: #555;
        font-size: 0.9rem;
      }}
    </style>
  </head>
  <body>
    <canvas id="sim" width="960" height="720"></canvas>
    <div class="controls">
{buttons}
    </div>
    <p id="status">Loading…</p>
    <script type="module" src="./run.js"></script>
  </body>
</html>
"""


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", type=Path, required=True)
    ap.add_argument("--id", required=True)
    ap.add_argument("--from", dest="from_expr", default=None)
    args = ap.parse_args()

    symbol = resolve_symbol(args.from_expr, args.id)
    html = TEMPLATE.format(
        title=args.id,
        buttons=buttons_html(symbol, args.id),
    )
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(html)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
