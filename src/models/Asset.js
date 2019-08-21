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
  dateOfAcquisition: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("Asset", Asset);