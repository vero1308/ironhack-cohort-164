// for mac users     =>  sudo npm install -g nodemon
// for windows users =>  npm install -g nodemon

// nodemon functions.js

console.log("hello world");

function test() {
  console.log("hey ! I'm a test function and i'm performing well !!!");
}

var res = test();

function whatIsNouhadSurname() {
  return "Coco";
}

var nouad = whatIsNouhadSurname();
console.log(nouad);
console.log(whatIsNouhadSurname());
console.log(whatIsNouhadSurname());
console.log(whatIsNouhadSurname() === nouad);
console.log("Coco" === "Coco");

function foo() {
  return 42;
}

var bar = foo;

console.log(bar());

// console.log(res);

function giveMeTheBall() {
  return { name: "ball" };
}

function giveMeNothing() {
  return undefined;
}

var possibility1 = giveMeNothing();
// undefined
var possibility2 = giveMeTheBall();
// {name: "ball"}

function sayMyName(n) {
  return "hey ! Your name is " + n;
}

const resultOfNameDropping = sayMyName("Gérard");
console.log(resultOfNameDropping);
console.log(sayMyName("Louise"));
console.log(sayMyName("Marie"));
console.log(sayMyName("Venkat"));

function sum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("hey i need 2 valid numbers :/");
  }
  return a + b;
}

console.log("---------->");

// console.log(sum(sum(42, 42), sum(42, 42)));

// try {
// use try / catch if an error can occurs
//     var x = sum(NaN, NaN);
//     console.log(x);

// } catch(err) {
//     console.log(err);
// }


/*************************
        D.I.Y
*************************/

// write a function taking one parameter (string)
// return the length of the string
// print the result in the console
// try with several values

// bonus : if the parameter is not a string : throw an error

/**
 * @throws Error if str is not a string
 */
function tellMeTheLengthOfThisString(str) {
  if (typeof str !== "string") {
    throw new Error("sorry mate, i need a string as an input here !!!");
  }
  return str.length;
}

var res1, res2, res3, res4, res5;

try {
  var res1 = tellMeTheLengthOfThisString("guillaume");
  var res2 = tellMeTheLengthOfThisString("franck");
  var res3 = tellMeTheLengthOfThisString("clara");
  var res4 = tellMeTheLengthOfThisString("anaïs");
  var res5 = tellMeTheLengthOfThisString({});
} catch (e) {
  console.error(e);
}

console.log(res1, res2, res3, res4, res5);
