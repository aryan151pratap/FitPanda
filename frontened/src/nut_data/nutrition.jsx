import React, { useEffect, useState } from 'react';
import NutritionDashboard from './nutrition_dashboard';
import FoodLogTable from './food_log';
import Nutrition_form from '../save_data/nutrition_form';
import { formatDateTime, fetchData } from '../components/date_time';
import img from '../image/diet.png';

const apiUrl = import.meta.env.VITE_BACKEND_ADD;

function Nutrition({ setNotification }) {
  const [data, setData] = useState([]);
  const [log_data, setLog_data] = useState([]);
  const [dailyGoals, setDailyGoals] = useState(null);
  const [days, setDays] = useState(7);
  const [currentOption, setCurrentOption] = useState('individual');
  const [currentChart, setCurrentChart] = useState('bar');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [show_form, setShow_form] = useState(false);
  const [show_goals_form, setShow_goals_form] = useState(false);

  useEffect(() => {
    fetchData({ apiUrl, setData, setDailyGoals, setNotification });
  }, [show_form]);

  useEffect(() => {
    const fetchLimitedData = async () => {
      try {
        const res = await fetch(`${apiUrl}/meal/limit/10`, {
          method: 'GET',
          credentials: 'include'
        });
        const result = await res.json();
        if (res.ok) {
          setLog_data(result);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchLimitedData();
  }, [activeTab, show_form]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 p-2">
      <div className="w-full">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Nutrition Dashboard</h1>
          <p className="text-gray-600">Track and analyze your nutritional intake</p>
        </header>

        <div className="flex border-b border-gray-200 mb-6">
          <button className={`px-4 py-2 font-medium text-sm ${activeTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('dashboard')}>Analytics Dashboard</button>
          <button className={`px-4 py-2 font-medium text-sm ${activeTab === 'food-log' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('food-log')}>Food Log</button>
        </div>

        {activeTab === 'dashboard' && (
          <NutritionDashboard
            data={data}
            log_data={log_data}
            dailyGoals={dailyGoals}
            setShow_goals_form={setShow_goals_form}
            show_goals_form={show_goals_form}
            setNotification={setNotification}
            show_form={show_form}
            setDays={setDays}
            days={days}
            currentOption={currentOption}
            setCurrentOption={setCurrentOption}
            currentChart={currentChart}
            setCurrentChart={setCurrentChart}
          />
        )}

        {activeTab === 'food-log' && <FoodLogTable log_data={log_data} />}

        <div className="mt-6 grid gap-6">
          <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Meals</h3>
            <div className="space-y-4">
              {data.slice(0, 4).map((food, index) => (
                <div key={index} className="flex flex-wrap sm:flex-row items-center border-b pb-4 last:border-0 last:pb-0">
                  <div className="shrink-0 bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 overflow-hidden">
                    <img src={food.image ? food.image : img} alt="" className='w-full h-full p-1 rounded-xl object-cover bg-white' />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-medium text-gray-900 flex flex-col sm:flex-row">{food.name} <span className='text-gray-500 capitalize sm:px-2'>({food.meal})</span></h4>
                    <div className="flex mt-1 text-sm text-gray-500">
                      <span className="mr-3">{food.calories} kcal</span>
                      <span className="mr-3">{food.carbs}g carbs</span>
                      <span className="mr-3">{food.protein}g protein</span>
                      <span>{food.fat}g fat</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 p-2 sm:p-1 mr-auto flex flex-row gap-2 mb-auto">Today
                    <div>{formatDateTime(food.createdAt).time}</div>
                  </div>
                </div>
              ))}
              <div>
                <button className='rounded border-2 font-bold border-dashed p-2 cursor-pointer hover:bg-green-400' onClick={() => setShow_form(true)}>
                  + Add meal
                </button>
              </div>
              {show_form && <Nutrition_form setShow_form={setShow_form} setNotification={setNotification} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
