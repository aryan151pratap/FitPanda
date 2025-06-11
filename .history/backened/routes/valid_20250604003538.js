const user = require('../models/user.js')
const otp = require('../models/user.js')
const express = require('express');
const router = express.Router();

router.get('/login', async (req, res) => {
	const { username, email, password } = req.body;
	try{
		if (!username || !email || !password) {
			return res.status(400).json({ message: 'Missing fields' });
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;