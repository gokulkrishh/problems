/*
  Queue is 'linear data structure' which follows particular order operation

  - FIFO (First In First Out)

  Time Complexity for Queue:
    - Access Θ(n)
    - Search Θ(n)
    - Insertion O(1)
    - Deletion O(1)

*/

function createQueue() {
  var queue = [];

  return {
    enqueue(value) {
      return queue.unshift(value);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    }
  };
}

// Banking queue

// var bankQueue = createQueue();

// // Go's into the cashier counter
// bankQueue.enqueue('A');
// bankQueue.enqueue('B');
// bankQueue.enqueue('C');

// console.log(bankQueue.length; // 3

// console.log(bankQueue.peek()); // A

// bankQueue.dequeue(); // A's amount is deposited
// bankQueue.dequeue(); // B's amount is deposited

// console.log(bankQueue.peek()); // C

// console.log(bankQueue.length); // 1

// Exporting createQueue
module.exports = createQueue;
