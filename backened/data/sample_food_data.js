const food = [
    {
        "name": "Aloo Paratha",
        "meal": "breakfast",
        "image": "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg",
        "calories": 692.0,
        "carbs": 72.4,
        "protein": 18.6,
        "fat": 40.0
    },
    {
        "name": "Paneer Butter Masala",
        "meal": "lunch",
        "image": "https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg",
        "calories": 605.7,
        "carbs": 86.9,
        "protein": 22.6,
        "fat": 13.6
    },
    {
        "name": "Masala Dosa",
        "meal": "breakfast",
        "image": "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg",
        "calories": 652.7,
        "carbs": 69.6,
        "protein": 37.2,
        "fat": 48.2
    },
    {
        "name": "Chicken Biryani",
        "meal": "lunch",
        "image": "https://images.pexels.com/photos/1087522/pexels-photo-1087522.jpeg",
        "calories": 697.1,
        "carbs": 117.1,
        "protein": 27.7,
        "fat": 10.9
    },
    {
        "name": "Idli Sambar",
        "meal": "breakfast",
        "image": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
        "calories": 706.0,
        "carbs": 62.9,
        "protein": 22.2,
        "fat": 19.6
    },
    {
        "name": "Palak Paneer",
        "meal": "lunch",
        "image": "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg",
        "calories": 536.9,
        "carbs": 76.0,
        "protein": 38.9,
        "fat": 22.2
    },
    {
        "name": "Rajma Chawal",
        "meal": "lunch",
        "image": "https://images.pexels.com/photos/1234534/pexels-photo-1234534.jpeg",
        "calories": 593.3,
        "carbs": 91.5,
        "protein": 36.0,
        "fat": 10.8
    },
    {
        "name": "Chole Bhature",
        "meal": "lunch",
        "image": "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg",
        "calories": 758.0,
        "carbs": 102.1,
        "protein": 18.3,
        "fat": 47.5
    },
    {
        "name": "Dhokla",
        "meal": "snack",
        "image": "https://images.pexels.com/photos/5945563/pexels-photo-5945563.jpeg",
        "calories": 511.7,
        "carbs": 68.1,
        "protein": 11.2,
        "fat": 24.3
    },
    {
        "name": "Vada Pav",
        "meal": "snack",
        "image": "https://images.pexels.com/photos/1094170/pexels-photo-1094170.jpeg",
        "calories": 462.8,
        "carbs": 98.5,
        "protein": 16.7,
        "fat": 34.7
    },
    {
    name: "Grilled Chicken Salad",
    meal: "lunch",
    calories: 320,
    protein: 30,
    carbs: 12,
    fat: 18,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
   {
    "name": "Kadai Paneer",
    "meal": "lunch",
    "calories": 720,
    "carbs": 85.2,
    "protein": 30.4,
    "fat": 35.6,
    "image": "https://www.cookwithmanali.com/wp-content/uploads/2020/04/Kadai-Paneer-Restaurant-Style.jpg"
  },
  {
    "name": "Methi Thepla",
    "meal": "breakfast",
    "calories": 540,
    "carbs": 70.3,
    "protein": 19.6,
    "fat": 23.5,
    "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/methi-thepla-1.jpg"
  },
  {
    "name": "Baingan Bharta",
    "meal": "lunch",
    "calories": 478,
    "carbs": 59.8,
    "protein": 15.2,
    "fat": 21.7,
    "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/baingan-bharta-2.jpg"
  },
  {
    "name": "Moong Dal Chilla",
    "meal": "breakfast",
    "calories": 502,
    "carbs": 64.2,
    "protein": 28.1,
    "fat": 15.8,
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/moong-dal-chilla.jpg"
  },
  {
    "name": "Pav Bhaji",
    "meal": "dinner",
    "calories": 764,
    "carbs": 98.5,
    "protein": 22.3,
    "fat": 34.9,
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/pav-bhaji-recipe.jpg"
  },
  {
    "name": "Misal Pav",
    "meal": "breakfast",
    "calories": 681,
    "carbs": 93.4,
    "protein": 24.5,
    "fat": 28.1,
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/misal-pav.jpg"
  },
  {
    "name": "Gobi Paratha",
    "meal": "breakfast",
    "calories": 635,
    "carbs": 74.2,
    "protein": 22.1,
    "fat": 28.3,
    "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2021/10/gobi-paratha.jpg"
  },
  {
    "name": "Bhindi Masala",
    "meal": "lunch",
    "calories": 468,
    "carbs": 58.2,
    "protein": 14.4,
    "fat": 24.1,
    "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/bhindi-masala.jpg"
  },
  {
    "name": "Lemon Rice",
    "meal": "lunch",
    "calories": 526,
    "carbs": 76.4,
    "protein": 14.3,
    "fat": 22.9,
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/lemon-rice-recipe.jpg"
  },
  {
    "name": "Rava Kesari",
    "meal": "snack",
    "calories": 598,
    "carbs": 92.7,
    "protein": 8.9,
    "fat": 25.4,
    "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/10/kesari-bath-1.jpg"
  },
  {
    name: "Oatmeal with Berries",
    meal: "breakfast",
    calories: 280,
    protein: 10,
    carbs: 45,
    fat: 8,
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Salmon with Vegetables",
    meal: "dinner",
    calories: 450,
    protein: 35,
    carbs: 25,
    fat: 22,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Protein Shake",
    meal: "snack",
    calories: 180,
    protein: 25,
    carbs: 15,
    fat: 5,
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
];

module.exports = food;
