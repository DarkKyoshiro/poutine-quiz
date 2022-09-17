const mongoose = require('mongoose');

const paramSchema = mongoose.Schema({
  ID: { type: Number, required: true },
  nb: { type: Number, required: true }
});

module.exports = mongoose.model('Params', paramSchema);