// ******* LOOPS LOOPS LOOPS (I) *************************


/*************************
    while loop
*************************/

var count = 1;
while (count <= 10) {
  // if the condition between parenthesis is true
  // the code inside the while block will be executed
  // until the condition becomes false
  console.log(count);
  count++; // so don't forget to provide a "escape" state
  // here, when count is equal ton 10, the loop will stop
}

console.log("end of this while loop");
console.log("---------------------");


/*************************
    do...while loop
*************************/

var str = "",
  limit = 24;

do {
  // the do block will be executed at least one time (mandatory)
  str += "hey...";
  console.log(str);
} while (str.length < limit);

console.log("end of the do..while the loop");
console.log("---------------------");

/*************************
       for loop
*************************/

var fruits = [
  "banana",
  "peach",
  "lemon",
  "pineapple",
  "mango",
  "strawberry",
  "apple"
];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[fruits.length - 1]);

for (let i = 0; i < fruits.length; i += 1) {
  console.log(i + " -> " + fruits[i]);
}

console.log("end of the for loop");
console.log("---------------------");

// You can parse arrays with a while loop too
// It is less convenient though
var i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i += 1; // don't forget to increment i here, otherwise you will end up with an infinite loop
}

console.log("end of while loop");
console.log("---------------------");

/*************************
        D.I.Y
*************************/

const artists = [
  "rihanna",
  "the clash",
  "will smith",
  "U2",
  "madonna",
  "bob marley"
];

for (let i = 0; i < artists.length; i++) {
  console.log((i + 1) + " -> " + artists[i]);
}
