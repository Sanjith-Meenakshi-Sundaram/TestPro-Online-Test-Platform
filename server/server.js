require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware

app.use(cors({
    origin: 'https://testpro-online-test-platform.onrender.com', // Allow only the local frontend during development
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Define allowed HTTP methods if needed
    credentials: true // Set to true if your frontend sends credentials (cookies, etc.)
}));


//app.use(cors());
app.use(express.json());

// Routes
//app.use('/api/admin', require('./routes/admin'));
app.use('/api/user', require('./routes/user'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
