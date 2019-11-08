const fs = require("fs");

const file = process.argv[2]; // the nodeschool test file is located in this array

fs.readFile(file, function(err, buffer) {
  if (err) throw err; // if the read process failed (for some reason)
  // once the read operation is done, the callback will be executed
  const text = buffer.toString(); // readFileSync outputs a Buffer (Array of type binary) : convert it to a string
  const result = text.split("\n").length - 1; // the result would be the length of the splited string minus one
  console.log(result); // 2 -> this log will be outputed AFTER
});

console.log(">>>> FINITO !!!"); // 1 -> this log will be outputed FIRST
