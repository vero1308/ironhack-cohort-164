var instruments = [
  "guitar",
  "drums",
  "trumpet",
  "synthetiser",
  "brass",
  "violin"
];

var fullIntrumentsList = "";

for (let i = 0; i < instruments.length; i += 1) {
  fullIntrumentsList += instruments[i] + " ";
}

// let's use the forEach loop to parse this array of instruments
console.log(fullIntrumentsList);

// with a "regular" function
instruments.forEach(function parser(currentValue, index) {
  console.log(`${index} -> ${currentValue}`);
});

// with an anonymous function
instruments.forEach(function(currentValue, index) {
  console.log(`${index} -> ${currentValue}`);
});

// with ES6 "FAT ARROW function" syntax
instruments.forEach((currentValue, index) =>
  console.log(`${index} -> ${currentValue}`)
);

// in it's shorter form (without the index)
instruments.forEach(currentValue => console.log(currentValue));

//  ANATOMY OF A FUNCTION
// A

function foo() {
  return "foo";
}

// B
var bar = function() {
  return "bar";
};

// C
var baz = () => {
  return "baz";
};

// D
var bim = () => "bim";

console.log("°°°°°°°°°°°°°°°°°°°°°°");
console.log(foo());
console.log(bar());
console.log(baz());
console.log(bim());
