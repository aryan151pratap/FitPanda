import React, { useEffect, useState, useRef, useMemo } from 'react';
import NutritionDashboard from './nutrition_dashboard';
import FoodLogTable from './food_log';
import Nutrition_form from '../save_data/nutrition_form';
import { formatDateTime, fetchData, fetchGoal } from '../components/date_time';
import img from '../image/diet.png';
import Confetti from "react-confetti";
import Search from './search_food';

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

  const [showConfetti, setShowConfetti] = useState(false);
  const [task, setTask] = useState([]);
  
  const summary = function(data) {
    return data.reduce((acc, food) => {
      acc.calories += food.calories;
      acc.carbs += food.carbs;
      acc.protein += food.protein;
      acc.fat += food.fat;
      return acc;
    }, { calories: 0, carbs: 0, protein: 0, fat: 0 });
  };

  const daily_data = useMemo(() => summary(data), [data]);
  const prevCompletedRef = useRef(false);

  useEffect(() => {
    fetchData({ apiUrl, setData, setNotification });
  }, [show_form]);

  useEffect(() => {
    fetchGoal({ apiUrl, setDailyGoals, setNotification })
  }, [show_goals_form])

  
  useEffect(() => {
    if (!dailyGoals) return;
  
    const isCompleted = ['calories', 'protein', 'carbs', 'fat'].some(
      key => daily_data[key] >= dailyGoals[key]
    );
    const completed = ['calories', 'protein', 'carbs', 'fat'].filter(
      key => daily_data[key] >= dailyGoals[key]
    );
    setTask(completed);
    if (isCompleted && !prevCompletedRef.current) {
      setShowConfetti(true);
      prevCompletedRef.current = true;

      setTimeout(() => {
        setShowConfetti(false);
        setTask([]);
      }, 6000);
    }

    if (!isCompleted) {
      prevCompletedRef.current = false;
    }
  }, [dailyGoals]);

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
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 sm:p-2">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />} 
      <div className=''>
        {task.length > 0 &&
        <div className='fixed inset-0 w-full h-fit p-5 flex flex-col gap-2 items-center justify-center'>
          {task.map((i, index) => (
            <div key={index} className='h-fit flex flex-row gap-2 rounded items-center px-4 bg-white capitalize'>
              <div className='w-fit h-fit p-2 bg-green-500 rounded-full'></div>
              <span className='p-2 flex gap-2'>{i}<span>Completed</span></span>
              <button className='cursor-pointer'
              onClick={() => {
                setTask(task.filter((key) => key!==i));
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        }
      </div>
      <div className="w-full">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Nutrition Dashboard</h1>
          <p className="text-gray-600">Track and analyze your nutritional intake</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow p-4 border-l-4 border-blue-500">
            <h3 className="text-gray-500 text-sm font-medium">Total Calories</h3>
            <p className="text-2xl font-bold text-gray-800">{summary(log_data).calories.toFixed(0)}</p>
            <p className="text-xs text-gray-500 mt-1">kcal</p>
          </div>
          
          <div className="bg-white rounded-xl shadow p-4 border-l-4 border-green-500">
            <h3 className="text-gray-500 text-sm font-medium">Total Carbs</h3>
            <p className="text-2xl font-bold text-gray-800">{summary(log_data).carbs.toFixed(0)}</p>
            <p className="text-xs text-gray-500 mt-1">grams</p>
          </div>
          
          <div className="bg-white rounded-xl shadow p-4 border-l-4 border-amber-500">
            <h3 className="text-gray-500 text-sm font-medium">Total Protein</h3>
            <p className="text-2xl font-bold text-gray-800">{summary(log_data).protein.toFixed(0)}</p>
            <p className="text-xs text-gray-500 mt-1">grams</p>
          </div>
          
          <div className="bg-white rounded-xl shadow p-4 border-l-4 border-red-500">
            <h3 className="text-gray-500 text-sm font-medium">Total Fat</h3>
            <p className="text-2xl font-bold text-gray-800">{summary(log_data).fat.toFixed(0)}</p>
            <p className="text-xs text-gray-500 mt-1">grams</p>
          </div>
        </div>

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
          <div className="md:col-span-2 bg-white rounded-xl shadow p-2 md:p-6">

          <Search/>

            <h3 className="text-lg font-bold text-gray-800 mb-4 p-2">Recent Meals</h3>
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
                <button className='rounded border-2 font-bold border-dashed p-2 cursor-pointer bg-green-300 hover:bg-green-400' onClick={() => setShow_form(true)}>
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
