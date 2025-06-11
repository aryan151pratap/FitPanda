const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./db.js');

const valid_user = require('./routes/valid.js');
const details = require('./routes/details.js');

const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

const app = express();

connectDB();

app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));


app.use(express.json());
app.use(cookieParser());

app.use('/valid', valid_user);
app.use('/details', details);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





