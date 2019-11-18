const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  label: String
});

const tagSchema = mongoose.model("tags", tagSchema);

module.exports = tagModel;
