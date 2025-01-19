
const express = require('express');
const router = express.Router();
const { createBudget } = require('../controllers/BudgetController');

router.post('/budgets', createBudget);

module.exports = router;
