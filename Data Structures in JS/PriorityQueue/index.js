/*
  Priority Queue is similar to Queues with priorities (High, Low).
*/

const createQueue = require('../Queue');

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();

  return {
    enqueue(value, isHighPriority = false) {
      if (isHighPriority) {
        return highPriorityQueue.enqueue(value);
      }
      return lowPriorityQueue.enqueue(value);
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }
      return lowPriorityQueue.dequeue();
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }
      return lowPriorityQueue.peek();
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    }
  };
}

// Project Priority Queues
const projectQueue = createPriorityQueue();

projectQueue.enqueue('feature 1');
projectQueue.enqueue('feature 2');
projectQueue.enqueue('feature 3');

console.log(projectQueue.length); // 3

// Production Issue
projectQueue.enqueue('Production issue', true); // Setting high priority

console.log(projectQueue.peek()); // Production issue

projectQueue.dequeue();

console.log(projectQueue.peek()); // feature 1

console.log(projectQueue.isEmpty()); // false
