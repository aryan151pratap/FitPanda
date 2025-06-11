const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    required: true,
    default: false
  },
  gender: {
		type: String,
		required: true,
    default: ''
	},
	height: {
		type: Number,
		required: true,
    default: 0
	},
	weight: {
		type: Number,
		required: true,
    default: 0
	},
	age: {
		type: Number,
		required: true,
    default: 0
	},
}, {
  timestamps: true
});

module.exports = mongoose.model("User", UserSchema);
