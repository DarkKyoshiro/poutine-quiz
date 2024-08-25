const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
  teamName: { type: String, required: true },
  questionID: { type: Number, required: true },
  answer: { type: String, required: false },
  timestamp: { type: Number, required: true },
  correct: { type: Number, required: true },
  pointsBet: { type: Number, required: true},
  points: { type: Number, required: true },
  bonusWrongAnswers: { type: Number, required: true },
  bonus: { type: Number, required: false },
  bonusSpeed: { type: Number, required: false }
});

module.exports = mongoose.model('Answer', answerSchema);