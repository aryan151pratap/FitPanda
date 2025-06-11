const User = require('../models/user.js')
const Otp = require('../models/otp.js')
const express = require('express');
const router = express.Router();
const sendOtpEmail = require('../component/send_mail.js');
const bcrypt = require('bcryptjs');
const auth = require('../middleware/authentication.js');

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

const handle_cookies = function(user){

  const JWT_SECRET = process.env.JWT_SECRET;

  const token = jwt.sign({ email: user.email, username: user.username }, JWT_SECRET, { expiresIn: '1d' });
  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'Strict',
    secure: false, // set true in production (HTTPS)
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  }).json({ message: 'Login successful' });

}


router.post('/sign_up', auth, async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Missing fields' });
    }
	  console.log(req.body);

    const existingUser = await User.findOne({ email });

    if (existingUser) {		
      if(existingUser.verified){
        return res.status(400).json({ message: 'User already exists and Verified' });
      }
      handle_send_mail(email, existingUser);

      return res.status(200).json({ message: 'User already exists but not Verified!' });
    }

	  const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    handle_send_mail(email, user);

    res.status(200).json({ message: 'User registered and OTP sent' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/sign_up', auth, async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Missing fields' });
    }
	  console.log(req.body);

    const existingUser = await User.findOne({ email });

    if (existingUser) {		
      if(existingUser.verified && existingUser.bcrypt.compareSync(password, existingUser.password)){
        return res.status(400).json({ message: 'User already exists and Verified' });
      }
      return res.status(200).json({ message: 'User already exists but not Verified!' });
    }

	  const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    handle_send_mail(email, user);

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

    res.status(200).json({ message: 'OTP verified successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;