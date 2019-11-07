// initial config
require("./config/mongo.js"); // database connection

// dependencies injection
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const flash = require("connect-flash");
const session = require("express-session");

// ------------------------------------------
// SERVER CONFIG
// ------------------------------------------
const server = express();
const port = 9090;

// Allow server to parse POST Request
server.use(express.urlencoded({ extended: true }));

// Make everything inside of public/ available to the browser (styles, images, frontend scripts)
server.use(express.static(path.join(__dirname, "public"))); // rock solid syntax

// indicates express where our "views" templates are located
server.set("views", path.join(__dirname, "views"));
// absolute path to a folder called "views"

// indicates express wich view engine this app will use ; )
server.set("view engine", "hbs");

// set the folder where views-partials will be located
hbs.registerPartials(path.join(__dirname, "views/partials"));

// enable "flash messaging" system
// the depend on session mechanism
server.use(
  session({
    secret: "mySecretShOüldb3H4rD2Craaaäk",
    saveUninitialized: true,
    resave: true
  })
);

server.use(flash());

// every time the server is called through HTTP ...
// this exposeFlashMessage callback will be executed ....
server.use(function exposeFlashMessage(req, res, next) {
  res.locals.success_msg = req.flash("success");
  res.locals.error_msg = req.flash("error");
  next();
});


//------------------------------------------
// SPLITED ROUTING
// ------------------------------------------
const baseRouter = require("./routes/base.js");
const artistRouter = require("./routes/artist.js");
const styleRouter = require("./routes/style.js");

server.use(baseRouter);
server.use(artistRouter);
server.use(styleRouter);

server.listen(port, () => {
  console.log(`server runs @ : http://localhost:${port}`);
});
