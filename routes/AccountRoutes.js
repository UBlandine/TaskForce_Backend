const express = require('express');
const router = express.Router();
const { createAccount } = require('../controllers/AccountController');

/**
 * @openapi
 * /api/v1/accounts:
 *   post:
 *     summary: Create a new account
 *     description: Add a new account to the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the account
 *                 example: "Savings Account"
 *               type:
 *                 type: string
 *                 description: The type of the account (e.g., savings, checking)
 *                 example: "Savings"
 *               balance:
 *                 type: number
 *                 description: The initial balance of the account
 *                 example: 1000
 *     responses:
 *       201:
 *         description: Account created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the created account
 *                 name:
 *                   type: string
 *                   description: The name of the created account
 *                 type:
 *                   type: string
 *                   description: The type of the created account
 *                 balance:
 *                   type: number
 *                   description: The balance of the created account
 *       400:
 *         description: Invalid input data
 */
router.post('/accounts', createAccount);

module.exports = router;
