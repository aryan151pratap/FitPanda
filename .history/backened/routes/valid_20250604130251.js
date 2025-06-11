const User = require('../models/user.js')
const Otp = require('../models/user.js')
const express = require('express');
const router = express.Router();
const sendOtpEmail = require('../email/send_mail.js');

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create and save user
    const user = new User({ username, email, password });
    await user.save();

    // Generate OTP and send
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await sendOtpEmail(email, otp);

    // Save OTP
    await Otp.create({
      userId: user._id,
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    // Final response
    res.status(200).json({ message: 'User registered and OTP sent' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


router.post('/otp', async (req, res) => {
	const { otp } = req.body;
	try{
		if (!otp) {
			return res.status(400).json({ message: 'Missing fields' });
		}
		console.log(req.body);
		res.status(200).json({ message: 'Received otp successfully' });
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;