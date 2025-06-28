const express = require('express');
const router = express.Router();
const Nutrition = require('../models/meal.js');
const User = require('../models/user.js');
const auth = require('../middleware/authentication.js');

// Helper to get IST UTC range based on env
const getISTRangeUTC = () => {
  const now = new Date();
  if (process.env.NODE_ENV === 'production') {
    const IST_OFFSET = 5.5 * 60 * 60 * 1000;
    const nowIST = new Date(now.getTime() + IST_OFFSET);
    const year = nowIST.getFullYear();
    const month = nowIST.getMonth();
    const day = nowIST.getDate();

    return [
      new Date(Date.UTC(year, month, day, -5, -30, 0, 0)),
      new Date(Date.UTC(year, month, day, 18, 29, 59, 999))
    ];
  } else {
    const istNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const start = new Date(istNow);
    start.setHours(0, 0, 0, 0);
    const end = new Date(istNow);
    end.setHours(23, 59, 59, 999);
    return [new Date(start.toISOString()), new Date(end.toISOString())];
  }
};

// 1. Save or update nutrition entry
router.post('/save', auth, async (req, res) => {
  const { food, calories, carbs, protein, fat, mealType, image } = req.body;
  if (!food || !calories || !carbs || !protein || !fat || !mealType) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    const [startUTC, endUTC] = getISTRangeUTC();

    const existingEntry = await Nutrition.findOne({
      userId: req.user.userId,
      meal: mealType,
      createdAt: { $gte: startUTC, $lte: endUTC }
    });

    if (existingEntry) {
      Object.assign(existingEntry, { food, calories, carbs, protein, fat });
      if (image) existingEntry.image = image;
      await existingEntry.save();
      return res.status(200).json({ message: 'Nutrition data updated successfully!' });
    }

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

// 2. Get today’s nutrition data
router.get('/today', auth, async (req, res) => {
  try {
    const [startUTC, endUTC] = getISTRangeUTC();
    const todayData = await Nutrition.find({
      userId: req.user.userId,
      createdAt: { $gte: startUTC, $lte: endUTC }
    }).sort({ createdAt: -1 });

    res.status(200).json(todayData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// 3. Get recent nutrition entries with limit
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

// 4. Update daily nutrition goals
router.post('/update-goals', auth, async (req, res) => {
  const { calories, protein, carbs, fat } = req.body;

  try {
    await User.updateOne(
      { _id: req.user.userId },
      { $set: {
        'dailyGoals.calories': calories,
        'dailyGoals.protein': protein,
        'dailyGoals.carbs': carbs,
        'dailyGoals.fat': fat
      }}
    );

    res.status(200).json({ message: 'Daily goals updated successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update daily goals' });
  }
});

// 5. Get user daily goals
router.get('/goals', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('dailyGoals');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ dailyGoals: user.dailyGoals || {} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch daily goals' });
  }
});

module.exports = router;
