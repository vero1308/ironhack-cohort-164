const express = require("express");
const server = express();
const hbs = require("hbs");
const path = require("path");
const port = 8080;
/**
 * APP INITAL SETUP !!! MANDATORY
 **/

// Make everything inside of public/ available to the browser (styles, images, frontend scripts)
server.use(express.static(path.join(__dirname, "public"))); // rock solid syntax

// indicates express where our "views" would be located
server.set("views", path.join(__dirname, "views")); // absolute path to a folder called "views"

// indicates express wich view engine this app will use ; )
server.set("view engine", "hbs"); // in this case hbs, there are many others ... pug/jade etc.

// register view partials folder
hbs.registerPartials(path.join(__dirname + "/views/partials"));

server.get("/", (req, res) => {
  const data = {
    name: "guillaume",
    bootcamp: "164",
    markup: "<p>lorem ipsum....</p>",
    isActive: false,
    title: "hello world of node !",

  };

  res.render("home", data);
});

server.get("/about", (req, res) => {
  const data = {
    users: ["foo", "bar", "baz"]
  };

  res.render("about", data);
});

server.listen(port, () => {
  console.log(`server ready @ http://localhost:${port}`);
});
