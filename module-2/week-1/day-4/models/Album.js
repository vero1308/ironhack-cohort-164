const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema;

const albumSchema = new Schema({
  name: String,
  releaseDate: Date,
  label: String,
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist"
  },
});

const albumModel = mongoose.model("Student", albumSchema);

module.exports = albumModel;