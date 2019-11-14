const express = require("express");
const router = new express.Router();
const protectAdminRoute = require("../middlewares/protectAdminRoute");
const albumModel = require("./../models/Album");
const artistModel = require("./../models/Artist");
const styleModel = require("./../models/Style");
const labelModel = require("./../models/Label");

router.get("/filtered-artists", (req, res) => {
  const q = req.query.band === "true" ? { isBand: true } : {};
  artistModel
    .find(q)
    .then(dbRes => res.send(dbRes))
    .catch(dbErr => console.log(dbErr));
});

router.get("/search", (req, res) => {
  artistModel
    .find({ name: { $regex: req.query.q, $options: "i" } })
    .then(dbRes => res.json(dbRes))
    .catch(dbErr => console.log(dbErr));
});

router.patch("/edit-style/:id", protectAdminRoute, (req, res) => {
  styleModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
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

module.exports = router;
