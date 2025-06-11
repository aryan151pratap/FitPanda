const user = require('../models/user.js')
const otp = require('../models/user.js')
const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
	const { username, email, password } = req.body;
	try{
		if (!username || !email || !password) {
			
			return res.status(400).json({ message: 'Missing fields' });
		}
		console.log(req.body);
		res.status(200).json({ message: 'Received successfully' });
	} catch (err) {
		console.log(err);
	}
});

router.post('/otp', async (req, res) => {
	const { otp } = req.body;
	try{
		if (!otp) {
			return res.status(400).json({ message: 'Missing fields' });
		}
		console.log(req.body);
		res.status(200).json({ message: 'Received otp successfully' });
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;