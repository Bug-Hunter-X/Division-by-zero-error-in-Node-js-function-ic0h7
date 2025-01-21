```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle cases where a or b is 0
  }
  //Added a check to ensure b is not 0 to prevent division by zero
  if(b === 0){
    return Infinity; // Or throw an error: throw new Error('Cannot divide by zero');
  }
  return a / b; 
}
```