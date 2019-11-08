const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: String,
  releaseDate: Date,
  artist: String,
  cover: String
  // label: String,
  // artist: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Artist"
  // },
});

const albumModel = mongoose.model("Album", albumSchema);

module.exports = albumModel;