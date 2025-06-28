import { useState } from 'react';
const apiUrl = import.meta.env.VITE_BACKEND_ADD;

function DailyGoalsForm({ setNotification, setShow_goals_form }) {
  const [goals, setGoals] = useState({
    calories: '',
    protein: '',
    carbs: '',
    fat: ''
  });

  const handleChange = (e) => {
    setGoals({ ...goals, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${apiUrl}/meal/update-goals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(goals),
      });

      const result = await res.json();

      if (res.ok) {
        setNotification('Daily goals updated successfully!');
		setShow_goals_form(false);
      } else {
        setNotification(result.message || 'Failed to update goals');
      }
    } catch (err) {
      console.error(err);
      setNotification('Error occurred while updating goals');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-md max-w-md mx-auto shadow-md bg-white">
      <h2 className="text-lg font-bold text-gray-700">Set Daily Nutrition Goals</h2>

	  <div></div>
      {['calories', 'protein', 'carbs', 'fat'].map((key) => (
        <div key={key} className="flex flex-col gap-1">
          <label className="text-sm capitalize text-gray-600">{key}</label>
          <input
            type="number"
            name={key}
            value={goals[key]}
            onChange={handleChange}
            className="p-2 border rounded"
            placeholder={`Enter ${key}`}
          />
        </div>
      ))}

      <div className='flex justify-between'>
		<button
			type="submit"
			className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 font-semibold"
		>
			Update Goals
		</button>
		<button
			type="submit"
			className="bg-red-500 text-white p-2 rounded hover:bg-red-600 font-semibold"
			onClick={() => setShow_goals_form(false)}
		>
			cancel
		</button>
	  </div>
    </form>
  );
}

export default DailyGoalsForm;
