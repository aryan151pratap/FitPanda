const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./db.js');

const valid_user = require('./routes/valid.js');
const details = require('./routes/details.js');
const nutrition = require('./routes/nutrition.js');
const search = require('./routes/search.js');
const chatRoute = require('./routes/assistant.js');

const PORT = process.env.PORT || 4000;
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
app.use('/meal', nutrition);
app.use('/search', search);
app.use('/api', chatRoute);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});





