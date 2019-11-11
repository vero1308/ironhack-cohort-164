const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: String,
  releaseDate: Date,
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist"
  },
  cover: String,
  label: {
    type: String,
    default: null
  },
});

const albumModel = mongoose.model("Album", albumSchema);

module.exports = albumModel;