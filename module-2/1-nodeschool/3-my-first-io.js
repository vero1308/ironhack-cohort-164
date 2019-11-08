const fs = require("fs"); // import the file system core library
// that's what we call dependency injection ... 

const file = process.argv[2]; // the nodeschool test file is located in this array
const f = fs.readFileSync(file); /// let's read the file
const text = f.toString(); // readFileSync outputs a Buffer (Array of type binary) : convert it to a string
const result = text.split('\n').length - 1; // the result would be the length of the splited string minus one

console.log(result); // this outputs the result for nodeschool validation