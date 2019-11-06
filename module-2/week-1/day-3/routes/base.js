const express = require("express");
const router = new express.Router();

/*------------------------------------------
// BASE ROUTING
------------------------------------------*/

router.get("/", (req, res) => res.redirect("/home"));

router.get("/home", (req, res) => {
  res.render("home");
});

module.exports = router;