```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle cases where a or b is 0
  }
  return a / b; // Potential division by zero if b is 0 after the first if statement
}
```