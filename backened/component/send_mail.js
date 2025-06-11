const nodemailer = require('nodemailer');

console.log("Loaded Email:", process.env.EMAIL_USER);

async function sendOtpEmail(email, otp) {

  console.log('Generated OTP:', otp);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"FitPanda" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Your OTP Code',
    text: `Your FitPanda OTP code is: ${otp}\n\nDO NOT share this code with anyone.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, otp };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

module.exports = sendOtpEmail;
