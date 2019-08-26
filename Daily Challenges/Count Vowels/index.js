/* Problem: Write a function that returns the number (count) of vowels in a given string. Letters considered as vowels are: a, i, e, o, and u.
  The function should be able to take all types of characters as input, including lower case letters, upper case letters, symbols, and numbers.

  Note: In this challenge, you should be able to efficiently ignore spaces and symbols and discern between capital and lowercase letters.
  Beginners can start with only lowercase letters and move up from there. It’ll definitely get you ready for tomorrow.


  Link: https://dev.to/thepracticaldev/daily-challenge-3-vowel-counter-34ni
*/

function countVowels(str) {
	if (!str.length) return 0;
	var count = 0;

	var hashMap = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u', A: 'A', E: 'E', I: 'I', O: 'O', U: 'U' };

	for (var i = 0; i < str.length; i++) {
		if (hashMap[str[i]]) {
			count++;
		}
	}

	return count;
}

export default countVowels;
