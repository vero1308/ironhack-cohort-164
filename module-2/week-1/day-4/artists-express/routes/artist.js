const express = require("express");
const router = new express.Router();

const artistModel = require("./../models/Artist");
const styleModel = require("./../models/Style");

/*------------------------------------------
// ARTISTS ROUTING
------------------------------------------*/

router.post("/create-artist", (req, res) => {
  const newArtist = {
    name: req.body.name,
    style: req.body.style,
    isBand: Boolean(req.body.isBand)
  };
  console.log(req.body);
  console.log("------------");
  artistModel.create(newArtist).then(dbRes => {
    // console.log(dbRes);
    req.flash("success", "artist successfully created");
    res.redirect("/all-artists");
  }).catch(dbErr => {
    console.error(dbErr)
  });
});

router.get("/create-artist", (req, res) => {
  styleModel.find().then(dbRes => {
    res.render("form-artist", { styles: dbRes });
  });
});

router.get("/all-artists", (req, res) => {
  artistModel.find().populate("style").then(dbRes => {
    console.log(dbRes);
    res.render("artists", { artists: dbRes, css: ["artists"] });
  });
});

router.get("/artist/:id", (req, res) => {
  console.log(req.params);
  console.log("°°°°°°°°°°°°°°°°°°");
  artistModel.findOne({_id: req.params.id})
  .populate("style").then(dbRes => {
    console.log(dbRes);
    res.render("artist", { artist: dbRes, css: ["artists"] });
  });
});

router.get("/manage-artists", (req, res) => {
  artistModel.find().populate("style").then(dbRes => {
    // console.log(dbRes);
    res.render("manager-artists", {
      artists: dbRes,
      css: ["artists", "tabler"]
    });
  });
});

router.get("/delete-artist/:id", (req, res) => {
  artistModel.findByIdAndRemove(req.params.id).then(dbRes => {
    req.flash("success", "artist successfully deleted");
    res.redirect("/manage-artists");
  });
});

module.exports = router;
