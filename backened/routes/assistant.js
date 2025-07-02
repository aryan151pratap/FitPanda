const express = require('express');
// const fetch = require('node-fetch');
const router = express.Router();
// require('dotenv').config();

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

console.log(GEMINI_API_KEY)

router.post('/chat', async (req, res) => {
  const { message } = req.body;
  console.log(req.body);

  try {
    if (!message) {
      return res.status(400).json({ message: 'Missing message field' });
    }

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }]
      })
    });

    const data = await response.json();
	console.log(data);
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I did not understand.';

    res.status(200).json({ reply });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error from Gemini API' });
  }
});

module.exports = router;
