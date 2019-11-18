const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  name: String,
  ref: String,
  sizes: Number,
  description: String,
  price: Number,
  img: {
    type: String,
    default:
      "https://s1.qwant.com/thumbr/0x0/3/c/47fe4a877a815796e4e74607d1d529b44437e34ba4882fdec70e94a8080d5c/noimage.gif?u=http%3A%2F%2Fmoorestown-mall.com%2Fnoimage.gif&q=0&b=1&p=0&a=1"
  },
  category: ["Men", "Women", "Kids"],
  id_tags: [String]
});

const sneakerModel = mongoose.model("sneaker", sneakerSchema);

module.exports = sneakerModel;
