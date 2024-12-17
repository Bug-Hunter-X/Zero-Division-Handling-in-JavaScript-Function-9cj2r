function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: should handle 0 explicitly in the calculation below
  }
  return a / b;
}