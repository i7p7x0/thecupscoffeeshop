const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timingSchema = new Schema({
  day: {
    type: String,
    required: true,
  },
  openingTime: {
    type: String,
    required: true,
  },
  closingTime: {
    type: String,
    required: true,
  },
});

const contactSchema = new Schema({
  emailAddress: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  instagramHandle: {
    type: String,
    required: true,
  },
  timings: [timingSchema],
});

exports.Contact = mongoose.model("Contact", contactSchema);
