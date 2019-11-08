const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/products", (req, res) => {
  res.render("products", {
    products: [
      {
        name: "sneakers",
        price: 120
      },
      { name: "TV", price: 300 },
      { name: "laptop", price: 670 }
    ]
  });
});

module.exports = router;
