// REDUCE is HOF, parsing an array and reducing it to a single value !

var numbers = [1, 1, 1, 1, 1];

var sum = numbers.reduce(function(accumulator, currentValue, i) {
  accumulator += currentValue;
  return accumulator;
}, 0);

console.log("--------->");
console.log(sum);

var students = [
  { name: "Miguel", cohort: 125 },
  { name: "Aïda", cohort: 152 },
  { name: "Sophie-Anne", cohort: 152 },
  { name: "Than", cohort: 125 },
  { name: "Yacine", cohort: 137 },
  { name: "Duc", cohort: 125 }
];

var result = students.reduce((acc, student) => {
  var cohort = student.cohort;
  if (acc[cohort]) acc[cohort].push(student.name);
  else acc[cohort] = [student.name];
  return acc;
}, {}); // the object here is the accumulator's initial state

console.log(result);

// var resultBis = students.reduce((acc, student) => {
//     var cohort = student.cohort;
//     if (!acc[cohort]) acc[cohort] = [student.name];
//     else acc[cohort].push(student.name);
//     return acc;
//   }, {});


// console.log(resultBis);
