/* Problems: Create a simple calculator that given a string of operators (+ - * and /) and numbers separated by spaces returns the value of that expression.

  Note: The order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right.
  Additions and subtractions have a lower priority and should also be performed left-to-right (BODMAS).


	Reference: https://dev.to/thepracticaldev/daily-challenge-10-calculator-23n7

*/

var Calculator = function() {
	return {
		evaluate: function(expression) {
			if (!expression) return null;

			var arrExp = expression.split(' ');
			var higherPriority = [];
			var lowerPriority = [];

			for (var i = 0; i < arrExp.length; i++) {
				var char = arrExp[i];
				if (char === '/') {
					higherPriority.push((higherPriority.pop() / arrExp[i + 1]).toFixed(2));
					i++;
				} else if (char === '*') {
					higherPriority.push(higherPriority.pop() * arrExp[i + 1]);
					i++;
				} else {
					higherPriority.push(char);
				}
			}

			for (var i = 0; i < higherPriority.length; i++) {
				var char = higherPriority[i];
				if (char === '+') {
					lowerPriority.push(parseFloat(lowerPriority.pop()) + parseFloat(higherPriority[i + 1]));
					i++;
				} else if (char === '-') {
					lowerPriority.push(lowerPriority.pop() - higherPriority[i + 1]);
					i++;
				} else {
					lowerPriority.push(char);
				}
			}

			return lowerPriority.pop();
		}
	};
};

export default Calculator;
