function foo(x?: number | string | null) {
  if (!x) {
    // undefined | null | 0 | "" | false
    x; // Type is string | number | null | undefined
  }
}
