/* Problems: Your task is to return a string that displays a diamond shape on the screen using asterisk (“*”) characters.

  More info: The shape that the print method will return should resemble a diamond.
  A number provided as input will represent the number of asterisks printed on the middle line.
  The line above and below will be centered and will have two less asterisks than the middle line.
  This reduction will continue for each line until a line with a single asterisk is printed at the top and bottom of the figure.

  Note: Return null if input is an even number or a negative number.

	Reference: https://dev.to/thepracticaldev/daily-challenge-2-string-diamond-21n2

	Solutions:
*/

var stringDiamond = function(n, char = '*') {
	if (n % 2 === 0 || n < 0) return null;

	var result = '';
	var middle = n;
	var firstLine = true;

	while (middle > 0) {
		if (!firstLine) {
			result = '\n' + result;
			for (var i = 0; i < (n - middle) / 2; i++) {
				result += ' ';
			}
		}

		for (var i = 0; i < middle; i++) {
			result += '*';
			if (!firstLine) {
				result = '*' + result;
			}
		}

		if (!firstLine) {
			for (var i = 0; i < (n - middle) / 2; i++) {
				result = ' ' + result;
			}
		}

		result = result + '\n';
		middle = middle - 2;
		firstLine = false;
	}

	return result;
};

export default stringDiamond;
