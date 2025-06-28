const User = require('../models/user.js')
const Otp = require('../models/otp.js')
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authentication.js');

router.post('/your', auth, async (req, res) => {
  const { gender, height, weight, age } = req.body;
  console.log(req.body);
  try {
	if (!gender || !height || !weight || !age) {
	  return res.status(400).json({ message: 'Missing fields' });
	}

	const existingUser = await User.findOne({ email: req.user.email });
	await User.updateOne(
		{ email: existingUser.email },
		{
			$set: {
			gender,
			height,
			weight,
			age
		  }
		},
		{ upsert: true }
	);
	res.status(200).json({ message: 'User details saved!' });

  } catch (err) {
	console.error(err);
	res.status(500).json({ message: 'Server error' });
  }
});

router.post('/update', auth, async (req, res) => {
  const { username , email, gender, height, weight, age } = req.body;
  console.log(req.body);
  try {
	if (!username || !email || !gender || !height || !weight || !age) {
	  return res.status(400).json({ message: 'Missing fields' });
	}

	const existingUser = await User.findOne({ email: req.user.email });
	await User.updateOne(
		{ email: existingUser.email },
		{
			$set: {
			username, 
			email, 
			gender,
			height,
			weight,
			age
		  }
		},
		{ upsert: true }
	);
	console.log('updated');
	res.status(200).json({ message: 'User details updated sucessfully!' });

  } catch (err) {
	console.error(err);
	res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;