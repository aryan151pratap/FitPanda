const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  email: {
	type: String,
	required: true,
  },
  otp: {
	type: String,
	required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
	index: { expires: '5m' }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Otp", OtpSchema);
