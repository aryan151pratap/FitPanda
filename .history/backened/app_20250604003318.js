const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js');

const user = require('./models/user.js');
const otp = require('./models/otp.js');
const valid_user = require('./routes/valid.js');
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));


app.use(express.json());
app.use('/valid', valid_user);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





