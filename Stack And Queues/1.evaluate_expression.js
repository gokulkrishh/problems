/* Problem: Evaluate the value of an arithmetic expression in Reverse Polish Notation.

  Note: Valid operators are +, -, *, /. Each operand may be an integer or another expression.

  Example:

  Input: ["4", "13", "5", "/", "+"]

  Output: 6

  Explanation: (4 + (13 / 5))

  Tip: Try using stack to do the operations

*/


function evaluateExpression(A) {
  var stack = [];
  var operand = { "*": true, "/": true, "+": true, "-": true }

  for (var i = 0; i < A.length; i++) {
    if (operand[A[i]]) {
      var op1 = stack.pop();
      var op2 = stack.pop();
      var tot;
      if (A[i] === "+") {
        tot = op2 + op1
      }
      else if (A[i] === "/") {
        tot = op2 / op1;
      }
      else if (A[i] === "-") {
        tot = op2 - op1;
      }
      else if (A[i] === "*") {
        tot = op2 * op1;
      }
      stack.push(Math.floor(tot));

    }
    else {
      stack.push(parseInt(A[i]));
    }
  }

  return stack.pop();
}

evaluateExpression(["4", "13", "5", "/", "+"]); // 6
evaluateExpression(["2", "1", "+", "3", "*"]); // 9

// Time Complexity: O(N)
