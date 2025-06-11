const user = require('../models/user.js')
const otp = require('../models/user.js')
const express = require('express');
const router = express.Router();

router.get('/:userId', async (req, res) => {
	const { userId } = req.params;
	try{
		if(userId){
			console.log(userId)
		}
	} catch (err) {
		console.log(err);
	}
});
