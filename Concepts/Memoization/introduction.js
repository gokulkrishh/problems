/*  Memoization is a technique to speed up the lookup of expensive operations by caching the results and re-using the cache in the next operation.
 */

//  Memoization function
var memoize = function(funz) {
  return function() {
    var args = Array.prototype.slice.call(arguments);
    funz.cache = funz.cache || {};
    return funz.cache[args] ? funz.cache[args] : (funz.cache[args] = funz.apply(this, args));
  };
};

// Example

function sqrt(n) {
  return Math.sqrt(n);
}

var ans1 = sqrt(100); // 10
var ans2 = sqrt(4); // 4

// In above example, sqrt is calulated everytime. Above n are small think about what if n is a big number.

// Use memoize funz
var memoizedSqrt = memoize(sqrt); // 10

console.log(memoizedSqrt(100)); //10, computed once and stored in cache
console.log(memoizedSqrt(100)); // 10 from cache
