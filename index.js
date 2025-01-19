
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const accountRoutes = require('./routes/AccountRoutes');  // Ensure the correct relative path

const transactionRoutes = require('./routes/TransactionRoutes');
const categoryRoutes = require('./routes/CategoryRoutes');
const budgetRoutes = require('./routes/BudgetRoutes');

dotenv.config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', accountRoutes);
app.use('/api', transactionRoutes);
app.use('/api', categoryRoutes);
app.use('/api', budgetRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
