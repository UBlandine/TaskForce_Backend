
const Budget = require('../models/BudgetModel');
const Category = require('../models/CategoryModel');

exports.createBudget = async (req, res) => {
  const { amount, categoryId, timePeriod } = req.body;
  try {
    const category = await Category.findById(categoryId);
    const newBudget = new Budget({ amount, category, timePeriod });
    await newBudget.save();
    res.status(201).json(newBudget);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
