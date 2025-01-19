
const express = require('express');
const router = express.Router();
const { createCategory } = require('../controllers/CategoryController');

router.post('/categories', createCategory);

module.exports = router;
