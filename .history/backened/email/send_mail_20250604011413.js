const nodemailer = require('nodemailer');
const generateOtp = require('./utils/generateOtp');

async function sendOtpEmail(email) {
  const otp = generateOtp();

  // Save OTP to DB or cache (with expiry)
  console.log('Generated OTP:', otp);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_app_password',
    },
  });

  const mailOptions = {
    from: 'FitPanda <your_email@gmail.com>',
    to: email,
    subject: 'Your OTP Code',
    text: `Your FitPanda OTP code is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, otp };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false };
  }
}
