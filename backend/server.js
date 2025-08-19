require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'https://blood-management-lmlo.onrender.com,http://localhost:3000')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Handle preflight requests for all routes
app.options('*', cors());

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/blood-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.get('/', (req, res) => {
  res.send('Blood Management Backend API');
});

// Import and use API routes
app.use('/api/blood-stock', require('./src/routes/bloodStock'));
app.use('/api/donations', require('./src/routes/donations'));
app.use('/api/patients', require('./src/routes/patients'));
app.use('/api/donors', require('./src/routes/donors'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 