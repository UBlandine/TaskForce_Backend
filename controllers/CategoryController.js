
const Category = require('../models/CategoryModel');

exports.createCategory = async (req, res) => {
  const { name, parent } = req.body;
  const newCategory = new Category({ name, parent });
  try {
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
