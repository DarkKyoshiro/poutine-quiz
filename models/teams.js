const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  socketId: { type: String, required: false },
  name: { type: String, required: true },
  group: { type: Number, required: true },
  score: { type: Number, required: false },
  logged: { type: Boolean, required: false }
});

module.exports = mongoose.model('Team', teamSchema);