/* Problem: Flatten the given array

  Note: Multiple level might be there in given input

  Example:
    Input: [1, 2, [3, 4, [5, [6]]], 7, 0] to [0, 1, 2, 3, 4, 5, 6, 7]

    Output: [1, 2, 3, 4, 5, 6, 7, 0]

*/

// Method 1: Using Just Recursion

function flatten(arr) {
  var temp = [];

  arr.forEach(function (val) {
    if (Object.prototype.toString.call(val) === "[object Array]") {
      temp = temp.concat(flatten(val));
    }
    else {
      temp.push(val);
    }
  });

  return temp;
}

// Method 2: Using ES6 Reduce & Recursion

Array.prototype.flatten = function () {
  return this.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
  }, []);
}
