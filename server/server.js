require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
const testRoutes = require('./routes/test');
const resultRoutes = require('./routes/result');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: true, // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true, // Allow credentials (cookies, etc.)
    allowedHeaders: ['Content-Type', 'Authorization'], // Necessary headers
}));

// Preflight response for OPTIONS requests (required for CORS)
app.options('*', cors());

//app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/test', testRoutes);
app.use('/api/result', resultRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
