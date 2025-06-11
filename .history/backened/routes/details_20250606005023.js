const User = require('../models/user.js')
const Otp = require('../models/otp.js')
const express = require('express');
const router = express.Router();

router.post('/your', async (req, res) => {
  const { gender, height, weight, age } = req.body;

  try {
	if (!gender || !height || !weight || !age) {
	  return res.status(400).json({ message: 'Missing fields' });
	}
	console.log(req.body);

	// const existingUser = await User.findOne({ email });


	res.status(200).json({ message: 'User details saved!' });

  } catch (err) {
	console.error(err);
	res.status(500).json({ message: 'Server error' });
  }
});