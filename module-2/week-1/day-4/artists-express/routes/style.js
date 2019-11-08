const express = require("express");
const router = new express.Router();

const styleModel = require("./../models/Style");

/*------------------------------------------
// ARTISTS ROUTING
------------------------------------------*/

router.post("/create-style", (req, res) => {
  const newStyle = {
    name: req.body.name,
    wikiURL: req.body.wikiURL
  };

  styleModel.create(newStyle).then(dbRes => {
    // console.log(dbRes);
    res.redirect("/manage-styles");
  });
});


router.get("/delete-style/:id", (req, res) => {
  styleModel.findByIdAndRemove(req.params.id).then(dbRes => {
    res.redirect("/manage-styles");
  });
});

router.get("/manage-styles", (req, res) => {
  styleModel.find().then(dbRes => {
    res.render("manager-style", { styles: dbRes, css: ["tabler"] });
  });
});

module.exports = router;
