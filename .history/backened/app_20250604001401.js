const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const express = require('express');
const user = require('./models/user.js');
const otp = require('./models/otp.js');


