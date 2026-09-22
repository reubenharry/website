---
title: "Haskell in the browser (WASM spike)"
slug: "browser-spike"
date: 2026-09-22T14:40:00-04:00
draft: false
description: "A tiny interactive demo: Haskell compiled to WebAssembly, drawing to a canvas."
---

This is a first attempt at running interactive Haskell simulations in the browser, aimed at demos for [reactive probabilistic programming](https://functional-reactive-ppl.netlify.app/reactive/).

The circle is drawn by a small [dunai](https://hackage.haskell.org/package/dunai) signal function compiled with GHC's WebAssembly backend. Move the mouse over the canvas; **Reset** snaps to the centre; **Pulse** grows the circle briefly.

<style>
  #browser-spike-demo {
    margin: 1.25rem 0 2rem;
  }
  #sim {
    display: block;
    max-width: 100%;
    background: #fff;
    border: 1px solid #ccc;
    cursor: crosshair;
  }
  #browser-spike-demo .controls {
    margin-top: 0.75rem;
    display: flex;
    gap: 0.5rem;
  }
  #browser-spike-demo button {
    font-size: 1rem;
    padding: 0.35rem 0.85rem;
  }
  #browser-spike-status {
    margin-top: 0.5rem;
    color: #555;
    font-size: 0.9rem;
  }
</style>

<div id="browser-spike-demo">
  <canvas id="sim" width="640" height="480"></canvas>
  <div class="controls">
    <button id="reset" type="button">Reset</button>
    <button id="pulse" type="button">Pulse</button>
  </div>
  <p id="browser-spike-status">Loading…</p>
</div>

<script type="module" src="/demos/browser-spike/run.js"></script>

The first load pulls a ~2MB `.wasm` file. If nothing appears, check the browser console — GitHub Pages needs to serve `.wasm` with a sensible MIME type, which it usually does.

Longer term the plan is to drive the same kind of page with Rhine + monad-bayes demos (particle filters and so on), reusing a Gloss-shaped `Picture` type without OpenGL.
