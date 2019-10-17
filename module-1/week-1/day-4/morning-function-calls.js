// This function displays a "hello world" String in the console.
// This function doesn't take any parameter.
// Do not use return statement for this function.
// When executing, what is the value of console.log(sayHelloWorld()) and why ?

function sayHelloWorld() {
  console.log("Hello world");
}

var x = sayHelloWorld();
console.log(x); // ????
console.log(sayHelloWorld()); // ????

// Iteration 2 - Write a function foo
// foo does not take a parameter.
// It returns the String "bar" when executed.

// Test it with the statement : console.log(foo())
// Test it also with a variable assignment : var x = foo()
// What is the value of x ?

function foo() {
  return "bar";
}

const x1 = foo();
console.log(x1);
console.log(foo());

// Iteration 3 - write a function dummyReturn
// This function takes a parameter p.
// It returns p, unmodified.

// Test with the statement console.log(dummyReturn()).
// Test also with a variable assignment : var x1 = dummyReturn().
// Check the value of x1 in your console.

var message = "yo Noémie !";

function dummyReturn(p) {
    console.log(p);
//   return p;
}

// var x2 = dummyReturn("hello cohort 164 !!!");
var x2 = dummyReturn(message);
// var x3 = dummyReturn("functions are fun ;)");
// var x4 = dummyReturn({name: "gui"});

console.log(x2);
// console.log(x3);
// console.log(x4);




// (function() {
//     // IIFE - Immediatly Invoked Function Expression
//     var rover = {};

//     function moveRover(dir) {

//     }

// }());

// console.log(rover);









