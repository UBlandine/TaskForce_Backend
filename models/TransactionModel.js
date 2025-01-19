
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  type: { type: String, required: true }, // 'income' or 'expense'
  account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  date: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
