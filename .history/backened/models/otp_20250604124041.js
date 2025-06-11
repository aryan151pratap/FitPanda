const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: {
	type: String,
	required: true,
	unique: true,
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
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Otp", UserSchema);
