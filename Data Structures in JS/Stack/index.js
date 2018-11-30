/*
  Stack is linear data structure similar to Queues except which follow particular order of operations

  - LIFO (Last In First Out)

  Time Complexity for Stack:
    - Access Θ(n)
    - Search Θ(n)
    - Insertion O(1)
    - Deletion O(1)

*/

function createStack() {
  var stack = [];

  return {
    push(value) {
      return stack.push(value);
    },
    pop() {
      return stack.pop();
    },
    peek() {
      return stack[stack.length - 1];
    },
    get length() {
      return stack.length;
    },
    isEmpty() {
      return stack.length === 0;
    }
  };
}

// Javascript call stack
var callStack = createStack();

console.log(callStack.isEmpty()); // True

callStack.push('function parent() {}');
callStack.push('function child() {}');
callStack.push('function grandchild() {}');

console.log(callStack.peek()); // function grandchild() {} will be executed first

// Function grandchild() is finished executing, so call stack will remove the function from the stack
callStack.pop();

console.log(callStack.length); // 2 more function left

callStack.pop();
callStack.pop();

console.log(callStack.isEmpty()); // True, now  stack is empty
