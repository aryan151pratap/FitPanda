const extractDate = (isoString) => {
  const date = new Date(isoString);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options); // e.g., 28 Jun 2025
};

export const generateDateLabels = (data, days) => {
  const dates = data.map(item => extractDate(item.createdAt));
  const uniqueDates = Array.from(new Set(dates)).sort((a, b) => new Date(b) - new Date(a));
  return uniqueDates.slice(0, days).reverse();
};

export const getSeriesByKey = (data, days, key) => {
  const labels = generateDateLabels(data, days);
  return [
    {
      name: key.charAt(0).toUpperCase() + key.slice(1),
      data: labels.map(date => {
        const filtered = data.filter(item => extractDate(item.createdAt) === date);
        const total = filtered.reduce((sum, food) => sum + (food[key] || 0), 0);
        return { x: date, y: total };
      })
    }
  ];
};

export const getIndividualMealSeries = (data, days) => {
  const labels = generateDateLabels(data, days);
  const meals = ['breakfast', 'lunch', 'snack', 'dinner'];

  return meals.map(meal => ({
    name: meal,
    data: labels.map(date => {
      const food = data.find(item => extractDate(item.createdAt) === date && item.meal === meal);
      return { x: date, y: food ? food.calories : 0 };
    })
  }));
};
