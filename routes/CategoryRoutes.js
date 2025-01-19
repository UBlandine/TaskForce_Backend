const express = require('express');
const router = express.Router();
const { createCategory } = require('../controllers/CategoryController');

/**
 * @openapi
 * /api/categories:
 *   post:
 *     summary: Create a new category
 *     description: Add a new category for budgeting or transaction classification.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the category (e.g., "Food", "Transport").
 *                 example: "Groceries"
 *               description:
 *                 type: string
 *                 description: A brief description of what the category is for.
 *                 example: "Expenses related to food and groceries."
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the created category
 *                 name:
 *                   type: string
 *                   description: The name of the created category
 *                 description:
 *                   type: string
 *                   description: The description of the created category
 *       400:
 *         description: Invalid input data
 */
router.post('/categories', createCategory);

module.exports = router;
