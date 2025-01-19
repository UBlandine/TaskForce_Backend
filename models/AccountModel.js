
const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // Bank, Mobile Money, Cash, etc.
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
