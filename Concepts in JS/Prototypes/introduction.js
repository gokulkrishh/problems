/*
  What is Prototypal Inheritance?

    - Means an 'object' inherits from 'another object'.
    - Each 'object' has 'private property' which holds a link (__proto__) to 'another object' called Prototype.
    - That 'prototype' has 'its own prototype' and so on until it reach's null as its prototype.
    - After 'null' javascript will stop looking up.

  Reference:
    - https://tylermcginnis.com/beginners-guide-to-javascript-prototype/
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

*/

// Example 1 - Animal Class using javascript functions

// Lets create a function called Animal
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.isHungry = true;
}

console.log(Animal.prototype); // Animal { constructor: Animal }
// When you declare a function, Javascript assigns its prototype with constructor.

console.log(Animal.prototype.constructor == Animal); // True

// Lets add properties & methods to Animal's prototype.
Animal.prototype.isHungry = true;

// All the animals sleep so lets a method called sleep
Animal.prototype.feed = function() {
  console.log('Feeding', this.name);
};

// Without new keyword
var dogWithoutNew = Animal('Jack','Dog'); // Wont return anything but sets this to window or undefined

// This in Animal is assigned to window object,
// If you add 'use-strict' at the top, this will be undefined.
console.log(window.name); // Jack
console.log(window.type); // Dog

// With new keyword,
// Creates an empty object, make that empty object as 'this' inside function Animal, so we can do something like 'this.name' or this.[anything] and return it.
// Plus by calling with new keyword, anything we add to Animal.prototype is accessible via dog instance.
var dog = new Animal('Jack', 'Dog'); // 'this' in Animal refers to dog's 'this' which is an empty object while creating it


// After creating dog instance, its returns an object like below.
console.log(dog); // { name: 'Jack', type: 'Dog', isHungry: true };

console.log(dog.name); // is there a property called 'name' in dog? Yes then print it.
// dog.name -> Jack
console.log(dog.type); // is there a property called 'type' in dog? Yes then print it.
// dog.type -> dog

console.log(dog.isHungry); // true
// is there a property called 'isHungry' in dog? Yes, then print it
// dog.isHungry -> true
// But there is `isHungry` property in Animal's prototype but it was not checked, this is called property shadowing in JS.

// dog.constructor will be pointing to Animal since we used 'new Animal()'
console.log(dog.constructor == Animal); // True

// .__proto__ is magical link to access the prototype's properties & methods (Dont use __proto__)
console.log(dog.__proto__ == Animal.prototype); // True

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
