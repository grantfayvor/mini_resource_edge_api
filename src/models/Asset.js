const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const Asset = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  serialNumber: String,
  imageUri: String,
  availability: {
    type: Boolean,
    default: true
  },
  dateOfAcquisition: Date,
  createdAt: {
    type: Date,
    default: new Date()
  },
  owner: {
    name: {
      type: String,
    },
    email: String,
    Department: String,
  }
});

module.exports = mongoose.model("Asset", Asset);