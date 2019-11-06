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
  // res.send("@ todo => student create")
  studentModel
    .create(req.body)
    .then(dbResult => {
      res.redirect("all-students");
    })
    .catch(dbError => {
      console.log(dbError);
      res.redirect("signup");
    });
});

// req.flash("success", "user successfully created");
// req.flash("error", "an error occured while creating user");

router.post("/delete-student/:id", (req, res) => {
  console.log(req.params);

  studentModel
    .findByIdAndDelete(req.params.id)
    .then(dbResult => {
      res.redirect("/all-students");
    })
    .catch(dbError => {
      console.error(dbError);
    });
});

module.exports = router;
