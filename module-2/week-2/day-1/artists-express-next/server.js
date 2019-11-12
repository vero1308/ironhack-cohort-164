// initial config
require("./config/mongo"); // database connection
require("./utils/hbs_helpers"); // custom functions adding usefull features to hbs templates

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

// Allow server to parse body from POST Request
server.use(express.urlencoded({ extended: true }));
// Allow server to parse JSON from AJAX Request
server.use(express.json());

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
    // req.session.cookie.expires = new Date(Date.now() + hour)
    // req.session.cookie.maxAge = hour
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
// Login
// ------------------------------------------
server.use(function checkLoggedIn(req, res, next) {
  console.log(req.session.currentUser);
  res.locals.isLoggedIn = Boolean(req.session.currentUser);
  res.locals.isAdmin = Boolean(req.session.currentUser && req.session.currentUser.role === "admin");
  next();
});

//------------------------------------------
// SPLITED ROUTING
// ------------------------------------------
const baseRouter = require("./routes/base.js");
const artistRouter = require("./routes/artist.js");
const styleRouter = require("./routes/style.js");
const albumRouter = require("./routes/album.js");
const authRouter = require("./routes/auth.js");

server.use(baseRouter);
server.use(artistRouter);
server.use(styleRouter);
server.use(albumRouter);
server.use("/auth", authRouter);

server.listen(port, () => {
  console.log(`server runs @ : http://localhost:${port}`);
});
