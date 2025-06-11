const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS 
  }
});

const sendOtpEmail = async (to, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'OTP Verification',
    html: `<h3>Your OTP is: <strong>${otp}</strong></h3>`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("OTP sent to", to);
    return true;
  } catch (error) {
    console.error("Error sending OTP:", error);
    return false;
  }
};

module.exports = sendOtpEmail;
