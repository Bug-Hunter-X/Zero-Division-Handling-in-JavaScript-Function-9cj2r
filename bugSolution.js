function foo(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero'); // Explicitly throw an error
  } else if (a === 0) {
    return 0; // Handle 0 in the numerator
  }
  return a / b; 
} 