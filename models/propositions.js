const mongoose = require('mongoose');

const propositionSchema = mongoose.Schema({
  question: { type: String, required: true },
  type: { type: String, required: true },
  
  proposition1: { type: String, required: false },
  proposition2: { type: String, required: false },
  proposition3: { type: String, required: false },
  proposition4: { type: String, required: false },

  answer: { type: String, required: true }
});

module.exports = mongoose.model('Proposition', propositionSchema);