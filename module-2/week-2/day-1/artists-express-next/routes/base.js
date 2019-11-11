const express = require("express");
const router = new express.Router();

const albumModel = require("./../models/Album");
const artistModel = require("./../models/Artist");

const protectAdminRoute = require("../middlewares/protectAdminRoute");

/*------------------------------------------
// BASE ROUTING
------------------------------------------*/

// PUBLIC SITE

router.get("/", (req, res) => res.redirect("/home"));

router.get("/home", (req, res) => {
  res.render("home", {
    axios: true, 
    js: ["search-bar"]
  });
});

// router.get("/contact", (req, res) => {
//   res.render("home");
// });

router.get("/search", (req, res) => {
  const searchResults = ["wutang", "toto", "u2"];
  res.json(searchResults);
});

// BACKEND SITE

router.get("/admin", protectAdminRoute, (req, res) => {
  res.render("admin");
});

module.exports = router;
