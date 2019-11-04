# --------- STEP 1 ---------

# 1 npm init -y to kickstart the app with default settings
# 2 check the existence of a newly created package.json
# 3 npm install the dependencies (express, hbs, [mongoose, etc....] )
# 4 files/folders setup

- touch server.js
- mkdir public
- mkdir views
- mkdir public/js
- touch public/js/helloWorld.js
- mkdir public/styles
- touch public/styles/styles.css
- mkdir public/assets
- mkdir public/assets/img

# 4 require() express in your server.js file 
# 5 execute express to get an app out of it and then configure it

const hbs = require("hbs");
const path = require("path");
const port = 8080;

// Make everything inside of public/ available to the browser (styles, images, frontend scripts)
server.use(express.static(path.join(__dirname, "public"))); // rock solid syntax

// indicates express where our "views" would be located
server.set("views", path.join(__dirname, "views")); // absolute path to a folder called "views"

// indicates express wich view engine this app will use ; )
server.set("view engine", "hbs"); // in this case hbs, there are many others ... pug/jade etc.

// register view partials folder
hbs.registerPartials(path.join(__dirname + "/views/partials"));


# 6  setup some routes to response to client requests
# 7 app.listen(port) to kickstart server listening


# 8 ... nodemon the main file !!!
# 8 bis ... or write a script in the package.json

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "nodemon ./server.js -e hbs,js"
  },

# --------- STEP 2 ---------

# 1 if git init .... allways add a .gitignore file to ignore node_modules/ folder
