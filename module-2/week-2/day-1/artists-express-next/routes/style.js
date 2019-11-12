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
    res.send(dbRes);
  });
});

router.patch("/edit-style/:id", protectAdminRoute, (req, res) => {

  styleModel
    .findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(dbRes => {
      res.send(dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr);
    });
});

router.get("/style/:id", protectAdminRoute, (req, res) => {
  styleModel
    .findOne({ _id: req.params.id })
    .then(dbRes => {
      res.send(dbRes);
    })
    .catch(dbErr => res.send(dbErr));
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
