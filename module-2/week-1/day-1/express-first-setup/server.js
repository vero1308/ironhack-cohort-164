const express = require("express"); // get the framework !
const hbs = require("hbs"); // require the templating engine
// you get a function that you should use ton generate the backend app !!!
const path = require("path"); // part of the node's core lib
const server = express();
// console.log(server);
const port = 8080;

// console.log(global)

// console.log(__dirname); // node constant always available ... indicates the current file's absolute path

/** APP INITAL SETUP !!! MANDATORY **/

// Make everything inside of public/ available to the browser (styles, images, frontend scripts)
server.use(express.static(path.join(__dirname, "public"))); // rock solid syntax

// indicates express where our "views" templates are located
server.set("views", path.join(__dirname, "views"));
// absolute path to a folder called "views"

// indicates express wich view engine this app will use ; )
server.set("view engine", "hbs"); // in this case hbs, there are many others ... pug/jade etc.engine !

server.get("/", (request, response) => {
  // server-side rendering !!!
  // hbs will "prepare" (convert) the file into proper html before
  // sending the response back top the client :)

  response.render("home", {
    title: "Hello Express",
    doYouGetNode: true,
    icon1: '<i class="fa fa-heart"></i>',
    icon2: '<i class="fa fa-code"></i>',
    css: ["transitions"],
    scripts: []
  });
});

server.get("/about", (request, response) => {
  const data = {
    title: "About my company",
    students: ["Sarah", "Amine", "Louise", "Camilo", "Parina", "Evgeny"],
    studentsObjects: [
      { name: "Sarah", cohort: 164 },
      { name: "Amine", cohort: 164 },
      { name: "Louise", cohort: 164 },
      { name: "Camilo", cohort: 164 },
      { name: "Parina", cohort: 164 },
      { name: "Evgeny", cohort: 164 }
    ],
    css: [],
    scripts: []
  };
  response.render("about", data);
});

server.get("/signup", (request, response) => {
  const data = {
    title: "Signup >> Let's do forms !",
    css: ["forms"],
    scripts: ["signup"]
  };
  response.render("signup", data);
});

server.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contacto"
  });
});

server.listen(port, () => {
  console.log(`server runs @ : http://localhost:${port}`);
});
// hey server : listen to http req on this specific port !!!
