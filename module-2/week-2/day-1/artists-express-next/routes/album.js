/*------------------------------------------
// ALBUMS ROUTING
------------------------------------------*/

const express = require("express");
const router = new express.Router();
const albumModel = require("./../models/Album");
const artistModel = require("./../models/Artist");
const protectAdminRoute = require("./../middlewares/protectAdminRoute");

// PUBLIC ROUTES

router.get("/all-albums", (req, res) => {
  albumModel
    .find() // this will fetch all albums from db
    .populate({
      path: "artist",
      populate: {
        path: "style"
      }
    }) // the artist key is a reference (objectId) to another document in the artists collection
    .then(dbRes => {
      // if successfull, it's an array of albums
      res.render("albums", { albums: dbRes, css: ["album"] }); // pass the array to the view
    })
    .catch(dbErr => console.error(dbErr));
});

router.get("/album/:id", (req, res) => {
  albumModel
    .findOne({ _id: { $eq: req.params.id } })
    .populate("artist")
    .then(dbRes => {
      res.render("album", {
        album: dbRes,
        css: ["album"]
      });
    })
    .catch(dbErr => console.log("err", dbErr));
});

// BACKEND ROUTES
router.get("/create-album", protectAdminRoute, (req, res) => {
  artistModel
    .find()
    .then(dbRes => {
      res.render("forms/album", { artists: dbRes });
    })
    .catch(dbErr => console.error(dbErr));
});

router.get("/edit-album/:id", protectAdminRoute, (req, res) => {
  albumModel
    .findOne({ _id: { $eq: req.params.id } }) // this will fetch one album by id from db
    .populate("artist")
    .then(album => {
      artistModel.find().then(artists => {
        res.render("form-album-edit", {
          album,
          artists,
          css: ["album"]
        });
      });
    })
    .catch(dbErr => console.log("err", dbErr)); // catched if an error occured );
});

router.get("/manage-albums", protectAdminRoute, (req, res) => {
  albumModel
    .find()
    .populate("artist")
    .then(dbRes => {
      res.render("manage/albums", { albums: dbRes, css: ["tabler"] });
    })
    .catch(dbErr => console.log("err", dbErr));
});

router.get("/delete-album/:id", protectAdminRoute, (req, res) => {
  albumModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      req.flash("success", "album successfully deleted");
      res.redirect("/manage-albums")
    })
    .catch(dbErr => console.log("err", dbErr));
});

router.post("/create-album", protectAdminRoute, (req, res) => {
  albumModel
    .create(req.body) // use the model and try doc insertion in database
    .then(() => {
      req.flash("success", "album successfully created");
      res.redirect("/manage-albums");
    })
    .catch(dbErr => console.error(dbErr));
});

router.post("/edit-album/:id", protectAdminRoute, (req, res) => {
  albumModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => {
      req.flash("success", "album successfully updated");
      res.redirect("/manage-albums");
    })
    .catch(dbErr => console.log("err", dbErr));
});

module.exports = router;
