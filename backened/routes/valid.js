const User = require('../models/user.js')
const Otp = require('../models/otp.js')
const express = require('express');
const router = express.Router();
const sendOtpEmail = require('../component/send_mail.js');
const bcrypt = require('bcryptjs');
const auth = require('../middleware/authentication.js');
const jwt = require('jsonwebtoken');

const handle_send_mail = async function(email, user){  
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await sendOtpEmail(email, otp);

  await Otp.updateOne(
    { userId: user._id },
    {
      $set: {
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000)
      }
    },
    { upsert: true }
  );
}

const handle_cookies = function(user, res){

  const JWT_SECRET = process.env.JWT_SECRET;

  const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
  return res.cookie('token', token, {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
    secure: process.env.NODE_ENV === 'production', // true in production
    maxAge: 24 * 60 * 60 * 1000
  }).json({ message: 'Login successful' });

}

router.get('/auth', auth, async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found'});

  const { username, email, verified, gender, height, weight, age } = user;

  res.status(200).json({
    user: {
      username,
      email,
      verified,
      gender,
      height,
      weight,
      age
    }
  });

})


router.post('/sign_up', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Missing fields' });
    }
	  console.log(req.body);

    const existingUser = await User.findOne({ email });

    if (existingUser) {		
      console.log(existingUser);
      if(existingUser.verified){
        return res.status(400).json({ message: 'User already exists' });
      }
      handle_send_mail(email, existingUser);
      handle_cookies(existingUser, res);

      return res.status(200).json({ message: 'User already exists but not Verified!' });
    }

	  const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    handle_send_mail(email, user);
    handle_cookies(user, res);

    res.status(200).json({ message: 'User registered and OTP sent' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

      if (existingUser.verified && isPasswordCorrect) {
        return handle_cookies(existingUser, res);
      }

      return res.status(400).json({ message: 'Incorrect password!' }); // ✅ use 400 for wrong credentials
    }

    return res.status(400).json({ message: 'Email Address or password is incorrect!' });

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

    const user = User.findOne({ email });

	await User.findOneAndUpdate(
		{ email },
		{
			$set: {
			verified: true
			}
		},
		{
			new: true,
			upsert: false
		}
	);
  await Otp.deleteOne({ _id: otpRecord._id }); // optional: delete OTP after use
  handle_cookies(user, res);

    // res.status(200).json({ message: 'OTP verified successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
    secure: process.env.NODE_ENV === 'production', // must match how it was set
  });
  return res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;