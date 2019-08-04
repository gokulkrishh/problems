/* Problems: Your goal is to create a function that removes the first and last letters of a string.

  Note: You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

	Reference: https://dev.to/thepracticaldev/daily-challenge-1-string-peeler-4nep

	Solutions: https://www.codewars.com/kata/remove-first-and-last-character/solutions/javascript?show-solutions=1
*/

// Solution 1 - Using Array
var stringPeeler = function(str) {
	if (str.length < 2) return str;

	const strArr = str.split('');
	strArr.shift();
	strArr.pop();

	return strArr.join('');
};

// Solution 2 - Using Slice
var stringPeeler = function(str) {
	if (str.length < 2) return str;
	return str.slice(1, -1);
};

// Solution 3 - substring
var stringPeeler = function(str) {
	if (str.length < 2) return str;
	return str.substring(1, str.length - 1);
};

// Solution 4 - substr(1, str.length - 2)

export default stringPeeler;
