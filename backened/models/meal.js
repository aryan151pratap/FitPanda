const mongoose = require("mongoose");

const NutritionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  name: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  meal: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Nutrition", NutritionSchema);
