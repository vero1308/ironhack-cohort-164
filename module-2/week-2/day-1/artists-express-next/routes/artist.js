/*------------------------------------------
// ARTISTS ROUTING
------------------------------------------*/
const express = require("express");
const router = new express.Router();

const artistModel = require("./../models/Artist");
const albumModel = require("./../models/Album");
const styleModel = require("./../models/Style");
const protectAdminRoute = require("./../middlewares/protectAdminRoute");

// PUBLIC ROUTES
router.get("/all-artists", (req, res) => {
  artistModel
    .find()
    .populate("style")
    .then(dbRes => {
      // console.log(dbRes);
      res.render("artists", {
        artists: dbRes,
        axios: true,
        js: ["filter-band"],
        css: ["artist"]
      });
    });
});

router.get("/filtered-artists", (req, res) => {
  const q = req.query.band === "true" ? { isBand: true } : {};
  artistModel
    .find(q)
    .then(dbRes => res.send(dbRes))
    .catch(dbErr => {
      console.log(dbErr);
    });
});

router.get("/artist/:id", (req, res) => {
  artistModel
    .findOne({ _id: req.params.id })
    .populate("style")
    .then(dbRes => {
      albumModel.find({ artist: req.params.id }).then(alRes => {
        res.render("artist", { artist: dbRes, albums: alRes, css: ["artist"] });
      });
      console.log(dbRes);
    })
    .catch(err => console.log(err));
});

// router.get("/artist/:id", (req, res) => {
//   const artist = artistModel.findOne({ _id: req.params.id }).populate("style");

//   const albums = albumModel.find({ artist: req.params.id });

//   Promise.all([artist, albums])
//     .then(dbRes => {
//       console.log(dbRes);
//       res.render("artist", {
//         artist: dbRes[0],
//         albums: dbRes[1],
//         css: ["artist"]
//       });
//     })
//     .catch(asyncErr => {
//       console.log(asyncErr);
//     });
// });

// BACKEND ROUTES
router.get("/create-artist", protectAdminRoute, (req, res) => {
  styleModel.find().then(dbRes => {
    res.render("form-artist", { styles: dbRes });
  });
});

router.post("/create-artist", protectAdminRoute, (req, res) => {
  const newArtist = {
    name: req.body.name,
    style: req.body.style,
    isBand: Boolean(Number(req.body.isBand)),
    description: req.body.description
  };

  artistModel
    .create(newArtist)
    .then(dbRes => {
      req.flash("success", "artist successfully created");
      res.redirect("/manage-artists");
    })
    .catch(dbErr => {
      console.error(dbErr);
    });
});

router.get("/manage-artists", protectAdminRoute, (req, res) => {
  artistModel
    .find()
    .populate("style")
    .then(dbRes => {
      // console.log(dbRes);
      res.render("manage-artists", {
        artists: dbRes,
        css: ["artists", "tabler"]
      });
    });
});

router.get("/edit-artist/:id", protectAdminRoute, (req, res) => {
  artistModel
    .findById(req.params.id)
    .populate("style")
    .then(dbRes => {
      styleModel.find().then(styles => {
        res.render("form-artist-edit", {
          artist: dbRes,
          styles: styles,
          css: ["artist"]
        });
      });
    })
    .catch(dbErr => console.log(dbErr));
});

router.post("/edit-artist/:id", protectAdminRoute, (req, res) => {
  const updatedArtist = {
    name: req.body.name,
    style: req.body.style,
    isBand: Boolean(Number(req.body.isBand)),
    description: req.body.description
  };

  artistModel
    .findByIdAndUpdate(req.params.id, updatedArtist)
    .then(dbRes => {
      req.flash("success", "artist successfully updated");
      res.redirect("/manage-artists");
    })
    .catch(dbErr => {
      console.error(dbErr);
    });
});

router.get("/delete-artist/:id", protectAdminRoute, (req, res) => {
  artistModel.findByIdAndRemove(req.params.id).then(dbRes => {
    req.flash("success", "artist successfully deleted");
    res.redirect("/manage-artists");
  });
});

module.exports = router;
