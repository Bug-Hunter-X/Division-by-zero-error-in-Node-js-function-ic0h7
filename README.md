# Node.js Division by Zero Bug

This repository demonstrates a common but easily overlooked error in Node.js: division by zero.  The `myFunction` attempts to handle cases where either input `a` or `b` is 0. However, this is insufficient to prevent all division by zero errors.

## Bug Description

The initial implementation fails to completely prevent division by zero when only one of the parameters is 0.  The solution demonstrates a more robust approach to prevent this type of error.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run the following command: `node bug.js`
4. Observe the error message, which clearly indicates the division by zero exception.

## Solution

The `bugSolution.js` file contains a corrected version of the function which thoroughly addresses the issue.
