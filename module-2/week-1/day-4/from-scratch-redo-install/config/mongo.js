const mongoose = require("mongoose");
const dbname = "cohort-164-artists";

function connectDB(dbName) {
  console.log(dbName);
  mongoose
    .connect("mongodb://localhost/" + dbname, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(dbConnectionResult =>
      // everything is good ^^
      console.log(
        `Connected to Mongo! Database name: "${dbConnectionResult.connections[0].name}"`
      )
    )
    .catch(err => {
      // an error occured
      console.error("Error connecting to mongo", err);
    });
}

module.exports = connectDB;
