const express = require("express");
const router = express.Router();
const userModel = require("../models/User");
const bcrypt = require("bcrypt");

//Authorization

router.post("/signup", (req, res, next) => {
 
  const user = req.body; // req.body contains the submited informations (out of post request)
  
  if (!user.email || !user.password) {
    res.redirect("/signup", { errorMsg: "All fields are required." });
    return;

  } else {

    console.log("ICI CI CIC CI");
    

    userModel
      .findOne({ email: user.email })
      .then(dbRes => {
        if (dbRes) {
          res.redirect("/signup", { errorMsg: "User already exists !" });
          return;
        }
        const salt = bcrypt.genSaltSync(10); // cryptography librairie
        const hashed = bcrypt.hashSync(user.password, salt);
        user.password = hashed;

        console.log("original", user.password);
        console.log("hashed", hashed);
        // return ;
        userModel
          .create(user)
          .then(() => res.redirect("/signin"))
          .catch(dbErr => console.log(dbErr));
      })
      .catch(dbErr => {
        next(dbErr);
      });
  }
});

//Authenticating

router.post("/signin", (req, res, next) => {
  const user = req.body;

  if (!user.email || !user.password) {
    res.render("auth/signin", { errorMsg: "Please fill in all the fields" });
  }
  userModel
    .findOne({ email: user.email })
    .then(dbRes => {
      if (!dbRes) {
        res.render("auth/signin", { errorMsg: "Bad email or password" });
        return;
      }
      if (bcrypt.compareSync(user.password, dbRes.password)) {
        console.log("good pass")
        req.session.currentUser = user;
        res.redirect("/admin");
        return;
      } else {
        console.log("bad pass")
        res.render("auth/signin", { errorMsg: "Bad email or password" });
        return;
      }
    })
    .catch(dbErr => {
      next(dbErr);
    });
}); 


module.exports = router;
