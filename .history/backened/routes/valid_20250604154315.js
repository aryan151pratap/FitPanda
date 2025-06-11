const User = require('../models/user.js')
const Otp = require('../models/user.js')
const express = require('express');
const router = express.Router();
const sendOtpEmail = require('../email/send_mail.js');
const bcrypt = require('bcryptjs');


router.post('/login', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ username, email, password });
    await user.save();

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await sendOtpEmail(email, otp);

    await Otp.create({
      userId: user._id,
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    res.status(200).json({ message: 'User registered and OTP sent' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



router.post('/otp/:email', async (req, res) => {
  const { otp } = req.body;
  const { email } = req.params;

  try {
    if (!otp) {
      return res.status(400).json({ message: 'OTP is required' });
    }

    const otpRecord = await Otp.findOne({ email, otp });
	console.log(otpRecord);

    if (!otpRecord) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    if (otpRecord.expiresAt < new Date()) {
      return res.status(400).json({ message: 'OTP expired' });
    }

    await Otp.deleteOne({ _id: otpRecord._id }); // optional: delete OTP after use

    res.status(200).json({ message: 'OTP verified successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;