/*------------------------------------------
// LABELS ROUTING
------------------------------------------*/

const express = require("express");
const router = new express.Router();
const labelModel = require("../models/Label");
const protectAdminRoute = require("../middlewares/protectAdminRoute");
const uploader = require("./../config/cloudinary");

// BACKEND ROUTES
router.get("/create-label", protectAdminRoute, (req, res) => {
  labelModel
    .find()
    .then(dbRes => {
      res.render("forms/label", { artists: dbRes });
    })
    .catch(dbErr => console.error(dbErr));
});

router.get("/edit-label/:id", protectAdminRoute, (req, res) => {
  labelModel
    .findOne({ _id: { $eq: req.params.id } }) // this will fetch one album by id from db
    .then(label => {
      labelModel.find().then(artists => {
        res.render("forms/label-edit", {
          label
        });
      });
    })
    .catch(dbErr => console.log("err", dbErr)); // catched if an error occured );
});

router.get("/manage-labels", protectAdminRoute, (req, res) => {
  labelModel
    .find()
    .then(dbRes => {
      res.render("manage/labels", { labels: dbRes, css: ["tabler"] });
    })
    .catch(dbErr => console.log("err", dbErr));
});

router.get("/delete-label/:id", protectAdminRoute, (req, res) => {
  labelModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      req.flash("success", "label successfully deleted");
      res.redirect("/manage-labels")
    })
    .catch(dbErr => console.log("err", dbErr));
});

router.post("/create-label", protectAdminRoute, uploader.single("logo"), (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  const newLabel = req.body;

  if (req.file) newLabel.logo = req.file.secure_url;

  labelModel
    .create(newLabel) // use the model and try doc insertion in database
    .then(() => {
      console.log("cool");
      
      req.flash("success", "label successfully created");
      res.redirect("/manage-labels");
    })
    .catch(dbErr => console.error(dbErr));
});

router.post("/edit-label/:id", protectAdminRoute, (req, res) => {
  labelModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => {
      req.flash("success", "label successfully updated");
      res.redirect("/manage-labels");
    })
    .catch(dbErr => console.log("err", dbErr));
});

module.exports = router;
