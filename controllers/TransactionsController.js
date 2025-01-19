
const Transaction = require('../models/TransactionModel');
const Account = require('../models/AccountModel');
const Category = require('../models/CategoryModel');

exports.createTransaction = async (req, res) => {
  const { amount, type, accountId, categoryId } = req.body;
  try {
    const account = await Account.findById(accountId);
    const category = await Category.findById(categoryId);
    const newTransaction = new Transaction({ amount, type, account, category });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
