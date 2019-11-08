// baby-steps.js

// console.log(process.argv);

// step 1 =>
// get all the desired values (i.e : not the first 2 values in the process.argv array)

// step 2 =>
// sum the values (watchout the types !!!)

// step 3 =>
// print the sum in the console

// check your program : learnyounode verify name-of-your-file.js

function sumArrayValues(arr) {
  var sum = 0;
  for (let i = 2; i < arr.length; i += 1) {
    sum += Number(arr[i]);
  }
  return sum;
}

console.log(sumArrayValues(process.argv));

// soluce 2 => soluce avec forEach
var sum2 = 0;
process.argv.forEach((val, i) => {
  if (i >= 2) sum2 += Number(val);
});

// soluce 3 => forEach sur tableau destructuré avec l'opérateur spread
// const [head, , ...tail] = process.argv;
// tail.forEach(n => {
//   sum += Number(n);
// });
