const express = require('express');
const router = express.Router();
const { createTransaction } = require('../controllers/TransactionsController');

/**
 * @openapi
 * /api/transactions:
 *   post:
 *     summary: Create a new transaction
 *     description: Add a new transaction (income or expense) to the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               accountId:
 *                 type: string
 *                 description: The ID of the account where the transaction occurred.
 *                 example: "605c72ef1532071f2c6b72f3"
 *               type:
 *                 type: string
 *                 description: The type of the transaction (either "income" or "expense").
 *                 example: "expense"
 *               amount:
 *                 type: number
 *                 description: The amount of the transaction.
 *                 example: 150
 *               description:
 *                 type: string
 *                 description: A brief description of the transaction.
 *                 example: "Groceries at the supermarket"
 *               categoryId:
 *                 type: string
 *                 description: The ID of the category the transaction belongs to (optional).
 *                 example: "605c72ef1532071f2c6b72f5"
 *               date:
 *                 type: string
 *                 format: date
 *                 description: The date of the transaction.
 *                 example: "2025-01-19"
 *     responses:
 *       201:
 *         description: Transaction created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the created transaction
 *                 accountId:
 *                   type: string
 *                   description: The ID of the account where the transaction occurred
 *                 type:
 *                   type: string
 *                   description: The type of the transaction
 *                 amount:
 *                   type: number
 *                   description: The amount of the transaction
 *                 description:
 *                   type: string
 *                   description: The description of the transaction
 *                 categoryId:
 *                   type: string
 *                   description: The ID of the category the transaction belongs to
 *                 date:
 *                   type: string
 *                   description: The date of the transaction
 *       400:
 *         description: Invalid input data
 */
router.post('/transactions', createTransaction);

module.exports = router;
