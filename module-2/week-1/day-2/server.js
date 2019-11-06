// dependencies injection
const express = require("express");
const hbs = require("hbs");

// inital config
const server = express();
const port = 8090;

server.use(express.urlencoded({ extended: true })); 
// accept/parse POST requests > extract the object out the posted name/value pairs
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

server.get("/signup", (req, res) => {
  res.render("signup");
});

server.get("/signup-confirm", (req, res) => {
  res.render("signup-confirm");
});

server.post("/signup", (req, res) => {
  console.log(req.body); // there are the posted data
  res.redirect("/signup-confirm");
});

// kickstart
server.listen(port, () => {
  console.log(`server is ready to rock @ http://localhost:${port}`);
});
