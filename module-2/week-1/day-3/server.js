// initial config
require("./config/mongo.js"); // database connection

// dependencies injection
const express = require("express");
const path = require("path");
const hbs = require("hbs");
// const flash = require("connect-flash");
// const session = require("express-session");
// ------------------------------------------
// SERVER CONFIG
// ------------------------------------------
const server = express();
const port = 8080;

// Allow server to parse POST Request
server.use(express.urlencoded({ extended: true }));

// Make everything inside of public/ available to the browser (styles, images, frontend scripts)
server.use(express.static(path.join(__dirname, "public"))); // rock solid syntax

// indicates express where our "views" templates are located
server.set("views", path.join(__dirname, "views"));
// absolute path to a folder called "views"

// indicates express wich view engine this app will use ; )
server.set("view engine", "hbs"); // in this case hbs, there are many others ... pug/jade etc.engine !

hbs.registerPartials(path.join(__dirname, "views/partials"));

// enable "flash messaging" system
// server.use(
//   session({
//     secret: "mySecretShOüldb3H4rD2Craaaäk",
//     saveUninitialized: true,
//     resave: true
//   })
// );

// server.use(flash());

// server.use(function(req, res, next) {
//   res.locals.success_msg = req.flash("success");
//   res.locals.error_msg = req.flash("error");
//   next();
// });



//------------------------------------------
// SPLITED ROUTING
// ------------------------------------------
const baseRouter = require("./routes/base.js");
const studentsRouter = require("./routes/students.js");

server.use(baseRouter);
server.use(studentsRouter);

server.listen(port, () => {
  console.log(`server runs @ : http://localhost:${port}`);
});
