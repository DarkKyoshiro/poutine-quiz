const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  id: { type: Number, required: true },
  question: { type: String, required: true },
  type: { type: String, required: true },
  speed: { type: Boolean, required: true },
  corrected: { type: Boolean, required: true },
  round: { type: Number, required: true },
  group: { type: Number, required: false },
  
  proposition1: { type: String, required: false },
  proposition2: { type: String, required: false },
  proposition3: { type: String, required: false },
  proposition4: { type: String, required: false },

  answer: { type: String, required: true },
  points: { type: Number, required: true }
});

module.exports = mongoose.model('Question', questionSchema);