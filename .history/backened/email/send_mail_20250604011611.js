const nodemailer = require('nodemailer');
const generateOtp = require('./utils/generateOtp');

async function sendOtpEmail(email) {
  const otp = generateOtp();

  // Save OTP to DB or cache (with expiry)
  console.log('Generated OTP:', otp);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
		user: process.env.EMAIL_USER,     // your Gmail
		pass: process.env.EMAIL_PASS      // App password (not your Gmail password)
	}
  });

  const mailOptions = {
    from: `FitPanda ${process.env.EMAIL_USER}`,
    to: email,
    subject: 'Your OTP Code',
    text: `Your FitPanda OTP code is: ${otp} DO NOT Share!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, otp };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false };
  }
}
