// 6 (7) Types IN JS :D

// Number -oo : +oo
1, 0, -1, 10.99, 1e2, 1.5 * 23;

// special number => NaN (Not A Number)

// ----------------------------------

// String
("hello world !");
"hello class"`hello franck + anaïs + clara`;

// ----------------------------------

// Boolean
// true OR false;
// !true === false;
// !false === true;

// 0 CAN be evaluated as false (true == 0)
// 1 CAN be evaluated as true (true == 1)

// TABLES OF TRUTH

// AND rules (false wins)
// true  && true   =>  true
// false && false  =>  false
// true  && false  =>  false
// false && true   =>  false

// OR rules (true wins)
// true  || true   =>  true
// false || false  =>  false
// true  || false  =>  true
// false || true   =>  true

// FALSY VALUES =>
// false
// null
// undefined
// 0
// ""
// NaN

// ----------------------------------

// null => temporary or definitive absence of value

// ----------------------------------

// undefined => na value at all

// ----------------------------------

// Object

// collection of key/value pairs
// the values can be of any type (object included)
// var o = {type: "object", usefull: true}

// ----------------------------------


var superVillain = {
  name: "Dark Gérard",
  age: 45,
  sayHi: function() {
    return "Mwahaha";
  },
  favoriteColor: null,
  likeCats: false,
  hobbies: ["kill bunnies", "evil laugh"]
};
