const mongoose = require('mongoose');

const propositionSchema = mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  typeQuestion: { type: String, required: true },
  
  propositions: { type: Object, required: true }
});

module.exports = mongoose.model('Propositions', propositionSchema);