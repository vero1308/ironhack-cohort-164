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