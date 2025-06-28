const express = require('express');
const router = express.Router();
const Nutrition = require('../models/meal.js');
const User = require('../models/user.js');
const auth = require('../middleware/authentication.js');

// 1. Save nutrition entry
router.post('/save', auth, async (req, res) => {
  const { food, calories, carbs, protein, fat, mealType, image } = req.body;

  if (!food || !calories || !carbs || !protein || !fat || !mealType) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    const newEntry = new Nutrition({
      userId: req.user.userId,
      name: food,
      calories,
      carbs,
      protein,
      fat,
      meal: mealType,
	    image
    });

    await newEntry.save();
    res.status(200).json({ message: 'Nutrition data saved successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// 2. Get today’s nutrition data for logged-in user
router.get('/today', auth, async (req, res) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  try {
    const todayData = await Nutrition.find({
      userId: req.user.userId,
      createdAt: { $gte: startOfDay }
    }).sort({ createdAt: -1 });

    res.status(200).json(todayData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// 3. Get limited number of recent nutrition entries
router.get('/limit/:count', auth, async (req, res) => {
  const limit = parseInt(req.params.count) || 10;

  try {
    const recentEntries = await Nutrition.find({ userId: req.user.userId })
      .sort({ createdAt: -1 })
      .limit(limit);

    res.status(200).json(recentEntries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/update-goals', auth, async (req, res) => {
  const { calories, protein, carbs, fat } = req.body;

  try {
    const updated = await User.updateOne(
      { _id: req.user.userId },
      {
        $set: {
          'dailyGoals.calories': calories,
          'dailyGoals.protein': protein,
          'dailyGoals.carbs': carbs,
          'dailyGoals.fat': fat
        }
      },
      { upsert: false }
    );

    res.status(200).json({ message: 'Daily goals updated successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update daily goals' });
  }
});

router.get('/goals', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('dailyGoals');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ dailyGoals: user.dailyGoals || {} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch daily goals' });
  }
});

module.exports = router;
