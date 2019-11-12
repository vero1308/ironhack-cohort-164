const express = require("express");
const router = express.Router();
const userModel = require("../models/User");
const bcrypt = require("bcrypt");

// Registering

router.post("/signup", (req, res, next) => {
 
  const user = req.body; // req.body contains the submited informations (out of post request)
  
  if (!user.email || !user.password) {
    res.redirect("/signup");
    return;

  } else {

    userModel
      .findOne({ email: user.email })
      .then(dbRes => {
        if (dbRes) {
          res.redirect("/signup");
          return;
        }

        console.log("here ...")
        const salt = bcrypt.genSaltSync(10); // cryptography librairie
        const hashed = bcrypt.hashSync(user.password, salt);
        console.log("original", user.password);
        user.password = hashed;

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

// Login

router.post("/signin", (req, res, next) => {
  const user = req.body;

  if (!user.email || !user.password) {
    return res.redirect("/signin");
  }

  userModel
    .findOne({ email: user.email })
    .then(dbRes => {

      if (!dbRes) {
        return res.redirect("/signin");
      }

      // user has been found in DB !

      if (bcrypt.compareSync(user.password, dbRes.password)) {
        console.log("good pass", dbRes)
        req.session.currentUser = dbRes;
        return res.redirect("/admin");

      } else {
        console.log("bad pass");
        res.redirect("/signin");
        return;
      }
    })
    .catch(dbErr => {
      next(dbErr);
    });
}); 


module.exports = router;
