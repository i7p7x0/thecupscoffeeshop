const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const menuSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  items: [itemSchema],
});

exports.Menu = mongoose.model("Menu", menuSchema);