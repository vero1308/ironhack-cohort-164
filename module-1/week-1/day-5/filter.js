var sneakers = ["jordan 4", "koston", "yeezy", "superstars", "jordan 10"];

// FILTER => is a function linked to the array prototype !
// FILTER is HOF => Higher order function (func thant takes a callback as an argument... a callback is a function)

function getOnlyJordans(val) {
  return val.indexOf("jordan") !== -1;
}

var favorites = sneakers.filter(getOnlyJordans);
console.log("------>");
console.log(favorites);

var numbers = [1, 2, 3, 4, 5, 10, 100, 1000];

var keptNumbers = numbers.filter(function(nb) {
  return isFinite(nb) && nb > 50;
});

console.log("------>");
console.log(keptNumbers);

/*************************
        D.I.Y
*************************/

var names = [
  "jill",
  "bill",
  "venkat",
  "nouhad",
  "guillaume",
  "clara",
  "dorothea"
];

// use filter to code a function that only keeps the names that are less than 5 characters.

var filteredNames = names.filter(function(currentName) {
  return currentName.length < 5;
});

var filteredNames2 = names.filter(currentName => currentName.length < 5);

// we could achieve the same result like this ...
// ... but it's more work :D
function myFilterName(names) {
    var result = [];
    for (let i = 0; i < names.length; i += 1) {
        if (names[i].length < 5) result.push(names[i])
    }
    return result;
}

console.log("------>");
console.log(filteredNames);

console.log("------>");
console.log(myFilterName(names));



var scaryAnimals = ["spider", "bugs", "scorpion", "snakes"];

var filteredAnimals = scaryAnimals.filter(a => true);

console.log("------>");
console.log(filteredAnimals);
/// even if the values are the same, it's not the same array at the end
/// filter returns a BRAND new array
console.log(scaryAnimals === filteredAnimals);
