const express = require("express");
const router = new express.Router();
// models allow us to interact with our databases (through CRUD operations)
const studentModel = require("./../models/Student");

router.get("/signup", (req, res) => {
  const data = {
    js: ["form"]
  };
  res.render("signup", data);
});

router.get("/all-students", (req, res) => {
  studentModel
    .find()
    .then(dbResult => {
      res.render("students", { students: dbResult });
    })
    .catch(dbError => {
      console.error(dbError);
    });
});

router.post("/signup", (req, res) => {
  // console.log(req.body); ???
  studentModel
    .create(req.body)
    .then(dbResult => {
      req.flash("success", "user successfully created");
      res.redirect("all-students");
    })
    .catch(dbError => {
      console.log(dbError);
      req.flash("error", "an error occured while creating user");
      res.redirect("signup");
    });
});


router.post("/delete-student/:id", (req, res) => {
  // :id is a variable (wildcard)
  console.log(req.params);
  // req.params exposes the variable parts of this route
  // return res.send("@todo erase student");

  studentModel
    .findByIdAndDelete(req.params.id)
    .then(dbResult => {
      res.redirect("/all-students");
    })
    .catch(dbError => {
      console.error(dbError);
    });

  // studentModel.findByIdAndDelete(req.params.id, function(dbError, dbResult) {
  //   if (dbError) res.redirect("/error-page");
  //   else res.redirect("/all-students");
  // });
  
});

module.exports = router;
