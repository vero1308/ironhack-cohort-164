// INIT CONFIG
require("dotenv").config();
require("./config/mongo")("cohort-164-artists");

// DEPENDENCIES

const express = require("express");
const hbs = require("hbs");
const path = require("path");

// SETUP
const server = express();

server.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    outputStyle: "compressed",
    debug: false,
    sourceMap: true
  })
);

// Make everything inside of public/ available to the browser (styles, images, frontend scripts)
server.use(express.static(path.join(__dirname, "public"))); // rock solid syntax

// indicates express where our "views" templates are located
server.set("views", path.join(__dirname, "views"));
// absolute path to a folder called "views"

// indicates express wich view engine this app will use ; )
server.set("view engine", "hbs");

// set the folder where views-partials will be located
hbs.registerPartials(path.join(__dirname, "views/partials"));

// ROUTING

server.use(require("./routes/base"));

console.log(process.env.foo)

// KICSTART
server.listen(process.env.PORT, () => {
  console.log("express started @ http://localhost:" + process.env.PORT);
});
