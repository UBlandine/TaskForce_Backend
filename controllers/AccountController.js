
const Account = require('../models/AccountModel');
exports.createAccount = async (req, res) => {
  const { name, type } = req.body;
  const newAccount = new Account({ name, type });
  try {
    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
