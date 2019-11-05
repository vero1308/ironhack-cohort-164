// dependencies injection
const express = require("express");
const hbs = require("hbs");

// inital config
const server = express();
const port = 8090;
server.use(express.static("./public"));
server.set("views", "./views");
server.set("view engine", "hbs");

// routing
server.get("/", (req, res) => {
  res.render("home");
});

server.get("/signup", (req, res) => {
  res.render("signup");
});

// kickstart
server.listen(port, () => {
  console.log(`server is ready to rock @ http://localhost:${port}`);
});
