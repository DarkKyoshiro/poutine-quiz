const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  id: { type: Number, required: true },
  type: { type: String, required: true },
  speed: { type: Boolean, required: true },
  round: { type: Number, required: true },
  group: { type: Number, required: false },
  points: { type: Number, required: true },
  
  title: { type: String, required: false },
  question: { type: String, required: true },
  questionComment: { type: String, required: false },
  propositionsDetailed: { type: Array, required: false },
  propositionsShort: { type: Array, required: false },
  answer: { type: String, required: true },
  answerComment: { type: String, required: false },

  showQuestion: { type: Boolean, required: true },
  propositionsStep: { type: Number, required: true },
  locked: { type: Boolean, required: true },
  showAnswer: { type: Boolean, required: true }
});

module.exports = mongoose.model('Question', questionSchema);