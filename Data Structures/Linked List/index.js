/*
  Linked List is linear data structure like Array but not stored in continuous fashion rather nodes are linked using pointers

  Advantages:
    - Dynamic in size
    - Insertion/Deletion is not expensive

  Dis-Advantages:
    - Accessing nodes is slower than Arrays (To access any node, we have to start with the head of linked list)
    - Because of pointers extra memory is used.

  Time Complexity for Linked List:
    - Access Θ(n)
    - Search Θ(n)
    - Insertion O(1)
    - Deletion O(1)

*/

// To create node
function createNode(value) {
  return {
    value,
    next: null
  };
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    add(value) {
      const node = createNode(value);
      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
      }

      this.tail.next = node;
      this.tail = node;
      this.length++;
      return node;
    },
    pop() {
      if (this.isEmpty()) return null;

      const node = this.tail;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }

      let current = this.head;
      let lastItemBeforeTail;

      while (current) {
        if (current.next === this.tail) {
          lastItemBeforeTail = current;
          break;
        }
        current = current.next;
      }

      lastItemBeforeTail.next = null;
      this.tail = lastItemBeforeTail;
      this.length--;
      return node;
    },
    delete(index) {
      if (index < 0 || index > this.length) return null;

      if (index === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        this.length--;
        return deleted;
      }

      let current = this.head;
      var previous;
      var i = 0;

      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }

      const deleted = current;
      previous.next = current.next;
      this.length--;
      return deleted;
    },
    get(index) {
      if (index < 0 || index > this.length) return null;
      if (index === 0) return this.head;
      let current = this.head;
      var i = 0;

      while (i < index) {
        i++;
        current = current.next;
      }
      return current;
    },
    isEmpty() {
      return this.length === 0;
    },
    print() {
      var values = [];
      let current = this.head;
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      console.log(values.join(' => '));
    }
  };
}

// Linked List
const list = createLinkedList();

list.add(1);

console.log(list.isEmpty()); // False

// list.print(); // { value: 1, next: null }

// Lets add more to list
list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.print();
console.log(list.length);

list.pop(); // removes the last element

list.print();
console.log(list.length);

list.delete(1);
list.print();
console.log(list.length);

console.log(list.get(1));
console.log(list.length);

list.print();
list.delete(0);
list.print();
