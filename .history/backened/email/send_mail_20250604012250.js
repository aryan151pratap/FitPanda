const nodemailer = require('nodemailer');

const generateOtp = function(length = 6) {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}


async function sendOtpEmail(email) {
  const otp = generateOtp();

  console.log('Generated OTP:', otp);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
		user: process.env.EMAIL_USER, 
		pass: process.env.EMAIL_PASS 
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
