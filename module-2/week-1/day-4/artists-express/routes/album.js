const express = require("express");
const router = new express.Router();
const albumModel = require("./../models/Album");

router.get("/create-album", (req, res) => {
  res.render("form-album");
});

router.get("/all-albums", (req, res) => {
  albumModel
    .find() // this will fetch all albums from db
    .then(dbRes => {
      // if successfull, it's an array of albums
      // console.log(dbRes)
      res.render("albums", { albums: dbRes }); // pass the array to the view
    })
    .catch(dbErr => {
      // if an error occured
      console.log("err", dbErr);
    });
});

router.get("/album-edit/:id", (req, res) => {
  albumModel
    .findOne({ _id: { $eq: req.params.id } }) // this will fetch one album by id from db
    .then(dbRes => {
      // if successfull, it's an objet representing an albums
      res.render("form-album-edit", { album: dbRes });
    })
    .catch(dbErr => {
      // if an error occured
      console.log("err", dbErr);
    });
});

router.get("/album-delete/:id", (req, res) => {
  albumModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => res.redirect("/all-albums"))
    .catch(dbErr => console.log("err", dbErr));
});

router.get("/album/:id", (req, res) => {
  console.log(req.params);
  albumModel
    .findOne({ _id: { $eq: req.params.id } }) // this will fetch one album by id from db
    .then(dbRes => {
      // if successfull, it's an objet representing an albums
      console.log("found album =>");
      console.log(dbRes);
      res.render("album", { album: dbRes });
    })
    .catch(dbErr => {
      // if an error occured
      console.log("err", dbErr);
    });
});

router.get("/all-albums", (req, res) => {
  albumModel
    .find() // this will fetch all albums from db
    .then(dbRes => {
      // if successfull, it's an array of albums
      // console.log(dbRes)
      res.render("albums", { albums: dbRes }); // pass the array to the view
    })
    .catch(dbErr => {
      // if an error occured
      console.log("err", dbErr);
    });
});

router.post("/create-album", (req, res) => {
  albumModel
    .create(req.body) // use the model and try doc insertion in database
    .then(() => {
      // if successfull
      // console.log("res", dbRes); // the created movie
      res.redirect("/all-albums"); // redirect ALLWAYS Triggers a GET request
    })
    .catch(dbErr => {
      // if an error occured
      console.log("err", dbErr);
    });
});

router.post("/edit-album/:id", (req, res) => {
  albumModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => res.redirect("/all-albums"))
    .catch(dbErr => console.log("err", dbErr));
});

module.exports = router;
