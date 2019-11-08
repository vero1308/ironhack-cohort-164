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
  const searchResults = ["wutang", "toto", "u2"]
  res.json(searchResults);
});

router.post("/comment", (req, res) => {
  // here you just got a post req ..
  console.log(req.body);
});

// router.get("/about", (req, res) => {
//   res.render("home");
// });

// router.get("/contact", (req, res) => {
//   res.render("home");
// });

module.exports = router;
