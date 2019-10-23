console.log("********************************");
console.log("********* simpler-closure.js *********");
console.log("********************************");

function myClosure() {
  // this function is executed right away (iife)
  "use strict";
  var total = 0; // total is accessible in the full iife's scope

  function incrementTotal(a) {
    // a classic function returning  the product of 2 number
    if (isNaN(a)) throw new Error("nahhh man... ^^");
    total += Number(a);
  }

  function getTotal() {
    // a simple getter that returns total's value
    return total;
  }

  return {
    // the functions returns an object
    incrementTotal: incrementTotal, // containing out "public methods"
    getTotal // ES6 shortcut
  };
  // all other values are private to this iife
}

const myWidget = myClosure();

console.log(myWidget); // an object containg the public API of our widget
console.log(myWidget.total); // undefined, total is private !
console.log(myWidget.getTotal()); // 0
myWidget.incrementTotal(10);
myWidget.incrementTotal("90");
myWidget.incrementTotal(100);
console.log(myWidget.getTotal()); // 200
// this way you force anyone using your "module" to use YOUR business logic
// hence you can't modify the total as you like... you have to use the provided function
