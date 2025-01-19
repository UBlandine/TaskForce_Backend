const express = require('express');
const router = express.Router();
const { createBudget } = require('../controllers/BudgetController');

/**
 * @openapi
 * /api/budgets:
 *   post:
 *     summary: Create a new budget
 *     description: Add a new budget to the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the budget (e.g., "Monthly Expenses").
 *                 example: "January Budget"
 *               amount:
 *                 type: number
 *                 description: The amount allocated for the budget.
 *                 example: 2000
 *               period:
 *                 type: string
 *                 description: The period for the budget (e.g., monthly, yearly).
 *                 example: "monthly"
 *     responses:
 *       201:
 *         description: Budget created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the created budget
 *                 name:
 *                   type: string
 *                   description: The name of the created budget
 *                 amount:
 *                   type: number
 *                   description: The allocated amount for the created budget
 *                 period:
 *                   type: string
 *                   description: The period for the created budget
 *       400:
 *         description: Invalid input data
 */
router.post('/budgets', createBudget);

module.exports = router;
