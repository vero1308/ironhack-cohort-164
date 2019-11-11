/*------------------------------------------
// STYLES ROUTING
------------------------------------------*/
const express = require("express");
const router = new express.Router();
const styleModel = require("./../models/Style");
const protectAdminRoute = require("./../middlewares/protectAdminRoute");

// BACKEND ROUTES

router.post("/create-style", protectAdminRoute, (req, res) => {
  const newStyle = {
    name: req.body.name,
    wikiURL: req.body.wikiURL
  };

  styleModel.create(newStyle).then(dbRes => {
    // console.log(dbRes);
    res.redirect("/manage-styles");
  });
});

router.get("/delete-style/:id", protectAdminRoute, (req, res) => {
  styleModel.findByIdAndRemove(req.params.id).then(dbRes => {
    res.redirect("/manage-styles");
  });
});

router.get("/manage-styles", protectAdminRoute, (req, res) => {
  styleModel.find().then(dbRes => {
    res.render("manage-styles", {
      axios: true,
      styles: dbRes,
      css: ["tabler"],
      js: ["manage-styles"]
    });
  });
});

module.exports = router;
