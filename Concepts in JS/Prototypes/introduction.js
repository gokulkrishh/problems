/*
  What is Prototypal Inheritance?

    - Means an 'object' inherits from 'another object'.
    - Each 'object' has 'private property' which holds a link (__proto__) to 'another object' called Prototype.
    - That 'prototype' has 'its own prototype' and so on until it reach's null as its prototype.
    - After 'null' javascript will stop looking up.

*/

// Example 1 - Animal Class using javascript functions

// Lets create a function called Animal
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.isHungry = true;
}

console.log(Animal.prototype); // Animal {}
// When you declare a function, Javascript assigns its prototype as empty.

// Lets add properties & methods to Animal's prototype.
Animal.prototype.isHungry = true;
// All the animals sleep so lets a method called sleep
Animal.prototype.feed = function() {
  console.log('Feeding', this.name);
};

// Using above Animal function to create a constructor function
var dog = new Animal('Jack', 'Dog'); // 'this' in Animal refers to dog's 'this'

console.log(dog.name); // is there a property called 'name' in dog? Yes then print it.
// dog.name -> Jack
console.log(dog.type); // is there a property called 'type' in dog? Yes then print it.
// dog.type -> dog

console.log(dog.isHungry); // true
// is there a property called 'isHungry' in dog? Yes, then print it
// dog.isHungry -> true
// But there is `isHungry` property in Animal's prototype but it was not checked, this is called property shadowing in JS.

console.log(dog.feed()); // Feeding Jack
// is there a method called 'feed' in dog? No, then check in Animal's prototype? Yes its found, then call the method.
// dog.feed (Not found) -> Animal.prototype.feed (Found) -> call the method

console.log(dog.isFed); // Now lets check if the dog is fed or not
// is there a property called 'isFed' in dog? No, then check Animal's prototype? Not found,
// then check its Animal's prototype.prototype? Found null instead, then stop looking.
// dog.feed (Not found) -> Animal.prototype (Not Found) -> Animal.prototype.prototype (Object.prototype) -> null

// Now we understood, how prototypes are created and how to javascript look up to its prototype to find a value or method.
// Extending Methods & Properties using prototype:

// Lets create function called Birds
function Bird(name, canFly) {
  this.name = name;
  this.canFly = canFly;
}

// Like Animals Bird do feed. Instead of creating a feed method in Bird's prototype. Lets inherit it from Animal's Prototype

Bird.prototype = Object.create(Animal.prototype); // Calling Object.create() method creates a new Object.
// By assigning Bird.prototype = Animal.prototype like above, we have linked them.

console.log(Object.getPrototypeOf(Bird) === Object.getPrototypeOf(Animal)); // True

// Lets create a sparrow
var sparrow = new Bird('Sparrow', 'Yes');

console.log(sparrow.name); // Sparrow
console.log(sparrow.canFly); // Yes

console.log(sparrow.isHungry); // true
console.log(sparrow.feed()); // Feeding Sparrow
// Above isHungry property & feed() method just works (Not magically if you know how prototypal inheritance works :P)
