
const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  timePeriod: { type: String, enum: ['weekly', 'monthly', 'yearly'], required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assuming a User model exists
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
