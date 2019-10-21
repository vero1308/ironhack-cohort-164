// 1 function => 1 action
function drinkCoffee(howMany) {
  return `I will need ${howMany} coffee${
    howMany > 1 ? "s" : ""
  } to get started`;
}

var result = drinkCoffee(1);
console.log(result);
result = drinkCoffee(10);
console.log(result);

function scoped() {
  var x = 0;

  function nestedFunction() {
    var y = 42;
    console.log("nested 1 => " + x);
    function nestedFunction2() {
      console.log("nested 2 => " + x);
    }
    nestedFunction2()
  }

  // console.log(y);
  nestedFunction();
  return typeof x;
  // dead code here, watcha
}

scoped();
// console.log(x);
