/* Problem: Convert a non-negative integer to its english words representation.

  Note: Given input is guaranteed to be less than 231 - 1.

  Example:

    Input: 123
    Output: "One Hundred Twenty Three"

    Input: 1001
    Output: "One Thousand One"

    Input: 100
    Output: "One Hundred"
*/


function numberToWords(num) {
  if (num === 0) return "Zero";

  var lessThanTen = { 1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine" };
  var lessThanTwenty = { 10: "Ten", 11: "Eleven", 12: "Twelve", 13: "Thirteen", 14: "Fourteen", 15: "Fifteen", 16: "Sixteen", 17: "Seventeen", 18: "Eighteen", 19: "Nineteen", 20: "Twenty" };
  var lessThanHundred = { 1: "Ten", 2: "Twenty", 3: "Thirty", 4: "Forty", 5: "Fifty", 6: "Sixty", 70: "Seventy", 8: "Eighty", 9: "Ninety" };

  function getWords(num) {
    var str = "";
    if (num < 10) {
      if (num === 0) return "";
      else {
        str = lessThanTen[num];
      }
    }
    else if (num < 20) {
      str = lessThanTwenty[num];
    }
    else if (num < 100) {
      str = lessThanHundred[Math.round(num / 10)] + " " + getWords(num % 10);
    }
    else if (num < 1000) {
      str = getWords(Math.floor(num / 100)) + " Hundred " + getWords(num % 100);
    }
    else if (num < 1000000) {
      str = getWords(Math.floor((num / 1000))) + " Thousand " + getWords(num % 1000);
    }
    else if (num < 1000000000) {
      str = getWords(Math.floor(num / 1000000)) + " Million " + getWords(num % 1000000);
    }
    else {
      str = getWords(Math.floor((num / 1000000000))) + " Billion " + getWords(num % 1000000000);
    }

    return str;
  }

  return getWords(num);
}

numberToWords(100); // "One Hundred"
numberToWords(101); // "One Hundred One"

// Time Complexity: O(1) due to hash tables we used.
