const AccountRouter = require('./routes/AccountRoutes');
const TransactionRouter = require('./routes/TransactionRoutes');
const CategoryRouter = require('./routes/CategoryRoutes');
const BudgetRouter = require('./routes/BudgetRoutes');

import express from 'express';

const allRoutes = express.Router();

//connection

allRoutes.use('/accounts', AccountRouter);
allRoutes.use('/budgets', BudgetRouter);
allRoutes.use('/categories', CategoryRouter);
allRoutes.use('/transactions', TransactionRouter);

export default allRoutes;