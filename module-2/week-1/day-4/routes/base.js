const express = require("express");
const router = new express.Router();

/*------------------------------------------
// BASE ROUTING
------------------------------------------*/

router.get("/", (req, res) => res.redirect("/home"));

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/search", (req, res) => {
  res.send(JSON.stringify(req.query))
});

// router.get("/about", (req, res) => {
//   res.render("home");
// });

// router.get("/contact", (req, res) => {
//   res.render("home");
// });

module.exports = router;
