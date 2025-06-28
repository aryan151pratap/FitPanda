const formatDateTime = (isoString) => {
  const date = new Date(isoString);
  const optionsDate = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-GB', optionsDate);
  const optionsTime = { hour: 'numeric', minute: '2-digit', hour12: true };
  const formattedTime = date.toLocaleTimeString('en-US', optionsTime);
  return { date: formattedDate, time: formattedTime };
};

const fetchData = async ({ apiUrl, setData, setNotification }) => {
  try {
    const mealRes = await fetch(`${apiUrl}/meal/today`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    const mealData = await mealRes.json();

    if (mealRes.ok) {
      if (mealData.length > 0) {
        setData(mealData);
      } else {
        setNotification('No meals added today.');
      }
    } else {
      setNotification(mealData.message || 'Failed to fetch today\'s meals');
    }

  } catch (err) {
    console.error('Error:', err);
    setNotification('An error occurred while fetching data');
  }
};

const fetchGoal = async ({ apiUrl, setDailyGoals, setNotification }) => {
  try{
    const goalsRes = await fetch(`${apiUrl}/meal/goals`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    const goalsData = await goalsRes.json();

    if (goalsRes.ok) {
      setDailyGoals(goalsData.dailyGoals || {});
    } else {
      console.warn('Failed to fetch daily goals');
    } 
  } catch (err) {
    console.error('Error:', err);
    setNotification('An error occurred while fetching data');
  }
}
export { formatDateTime, fetchData, fetchGoal };
