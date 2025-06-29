const express = require('express');
const router = express.Router();
const foods = require('../data/sample_food_data.js'); // Your Nutrition model
const Fuse = require('fuse.js');

// Search Route
router.get('/', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: 'Missing search query' });
  try {
    const fuse = new Fuse(foods, {
      keys: ['name', 'meal'],
      threshold: 0.4 // adjust for stricter/looser matching
    });
    
    const result = fuse.search(query);
    const matchedFoods = result.map(r => r.item);

    res.status(200).json(matchedFoods);
  } catch (err) {
    res.status(500).json({ error: 'Search failed', details: err.message });
  }
});

module.exports = router;
