const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const allRoutes = require('./routes/index');  // Importing all routes from index.js

dotenv.config();

const app = express();

// Connect to Database
connectDB();

// Swagger configuration
const options = {
  definition: {
    openapi: '3.0.0',  // OpenAPI version
    info: {
      title: 'TaskForce Pro API',
      version: '1.0.0',
      description: 'API documentation for TaskForce Pro Web Application',  // Description of the API
    },
    security: [
      {
        bearerAuth: []  // Define security scheme for authentication
      }
    ],
    servers: [
      {
        url: 'http://localhost:5000/api/v1',  // Update URL to match your API version path
        description: 'Use this API to manage your TaskForce Pro budgets',
      },
    ]
  },
  apis: ['./routes/*.js', './controllers/*.js'],  // Path to your route and controller files
};

const swaggerSpec = swaggerJsdoc(options);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware for parsing JSON
app.use(express.json());

// API Routes
app.use('/api/v1', allRoutes);  // Use the routes under /api/v1

// 404 Handler - For undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
