const http = require("http"); //
const url = process.argv[2];

http.get(url, response => {
  response.setEncoding("utf8"); // concert the buffer answer to human-readble Strings
  response.on("data", str => console.log(str)); // print each received data
  // it means data come in chunks (pieces) ... over time
});