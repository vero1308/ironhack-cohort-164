const fs = require("fs");
const folder = process.argv[2]; // the given folder path (haystack)
const ext = process.argv[3]; // the extension we are looking for (needle)

fs.readdir(folder, (err, list) => { // let's use this node build in function to read folder's content
  if (err) return console.log(err); // return directly if a problem occurs
  list // parse all the files in give directory
    .filter(file => file.endsWith("." + ext)) // keep only the one ending with the given extension
    .forEach(filteredFile => console.log(filteredFile)); // display each of the filtered files
});
