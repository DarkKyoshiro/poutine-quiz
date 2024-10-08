const mongoose = require('mongoose');

const paramSchema = mongoose.Schema({
  ID: { type: Number, required: true },
  nb: { type: Number, required: true },
  negPoints: { type: Boolean, required: true },
  bonusesWrongAnswers: { type: Boolean, required: true },
  teamThreshold: { type: Number, required: true },
  teamThresholdModifier: { type: Number, required: true },
  percentErrorsTiers: { type: Array, required: true },
  bonusWrong: { type: Array, required: true },
  lockSpeed: { type: Boolean, required: true },
  bonusSpeed: { type: Number, required: true }
});

module.exports = mongoose.model('Params', paramSchema);