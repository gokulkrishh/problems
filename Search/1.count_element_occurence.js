/* Problem: Given a sorted array of integers, find the number of occurrences of a given target value.

  Hint: Your algorithm’s runtime complexity must be in the order of O(log n). If the target is not found in the array, return 0.

  Example:

  Input: [5, 7, 7, 8, 8, 10] and target value 8

  Output: 2

*/

function elementOccurence(arr, x) {
  if (arr.length === 0) return 0;

  var count = 0;
  var mid = Math.floor(arr.length / 2);

  while (mid <= arr.length) {
    if (x === arr[mid]) {
      break;
    }
    else if (x < arr[mid]) {
      mid -= 1;
    }
    else {
      mid += 1;
    }
  }

  var foundOrder = Math.floor(arr.length / 2);

  while (foundOrder < arr.length) {
    if (arr[foundOrder] === x) {
      count++;
      foundOrder++;
    } else {
      break;
    }
  }

  foundOrder = Math.floor((arr.length / 2) - 1);

  while (foundOrder > -1) {
    if (arr[foundOrder] === x) {
      count++;
      foundOrder--;
    } else {
      break;
    }
  }

  return count;
}

elementOccurence([5, 7, 7, 8, 8, 10], 8); // 2

/* Complexity:

  Time Complexity: O(log n) - As we are using binary search method to find x

*/
