const mongoose = require('mongoose');

const menuTeamGroupSchema = mongoose.Schema({
  menuNb: { type: Number, required: true },
  round: { type: Number, required: true },
  teamGroup: { type: Number, required: true }
});

module.exports = mongoose.model('MenuTeamGroup', menuTeamGroupSchema);