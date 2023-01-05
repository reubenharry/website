---
title: "Dependent Types"
date: 2020-01-26T17:07:24+01:00
draft: True

---

Dependent types are most easily understood by looking at a program that requires them. I'll first give a contrived example, then a real one.

## Contrived example

Suppose we want a function that takes an integer, and returns it if it is less than $10$, and otherwise returns the unit value `()`.

Haskell functions must have a single return type, so you could either have `Int -> Int` or `Int -> ()`, but a function cannot sometimes return an `Int` and sometimes return a `()`, depending on the input.

The standard solution is to return a sum type, i.e. `Int -> Either () Int`. This works, but it is then the job of the consumer of this function to handle the `Either`, and moreover, we don't have a static guarantee that when the input is less than $10$, the returned `Either () Int` is really a `Left ()`.

Dependent types allow a degree of expressivity which solves this problem. In pseudocode, the desired type would be:

```haskell
foreach (x :: Int) -> if x < 10 then Int else ()
```

Two key things to note about this:

- the types here are treated like values, to the extent that we can write an if-statement involving *types*
- the `foreach` keyword associates a value with the type `Int`, so that this value can be used later on in the type.

This isn't a valid Haskell type, and won't be for a while.

## Real example
