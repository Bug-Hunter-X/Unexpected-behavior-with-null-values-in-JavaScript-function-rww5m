function foo(a, b) {
  // Handle null values using the nullish coalescing operator (??)
  a = a ?? 0; 
  b = b ?? 0; 
  return a + b;
}

console.log(foo(null, 1)); // Output: 1
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(1, 2)); // Output: 3