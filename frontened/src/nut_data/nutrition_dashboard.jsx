import React from 'react';
import ColumnChartCard from "../chart/column_line";
import BarChart from "../chart/bar_chart";
import DataLabelsChart from "../chart/chart_card";
import DailyGoalsForm from "../save_data/save_goala";
import { getSeriesByKey, getIndividualMealSeries } from "../chart/chart_processor";

function NutritionDashboard({ data, log_data, dailyGoals, setShow_goals_form, show_goals_form, setNotification, show_form, setDays, days, currentOption, setCurrentOption, currentChart, setCurrentChart }) {
  const series = currentOption === 'individual' 
    ? getIndividualMealSeries(log_data, days) 
    : getSeriesByKey(log_data, days, currentOption);

  const summary = (data) => {
    return data.reduce((acc, food) => {
      acc.calories += food.calories;
      acc.carbs += food.carbs;
      acc.protein += food.protein;
      acc.fat += food.fat;
      return acc;
    }, { calories: 0, carbs: 0, protein: 0, fat: 0 });
  };

  const daily_data = summary(data);

  const options = [
    { value: 'individual', label: 'Individual Meals' },
    { value: 'calories', label: 'Calories' },
    { value: 'carbs', label: 'Carbohydrates' },
    { value: 'protein', label: 'Protein' },
    { value: 'fat', label: 'Fat' }
  ];

  const charts = [
    { value: 'bar', label: 'Bar Chart' },
    { value: 'multi_bar', label: 'Multi Bar' },
    { value: 'pie', label: 'Pie Chart' },
    { value: 'line', label: 'Line Chart' }
  ];

  return (
    <div className='w-full h-full flex flex-col md:flex-row gap-4'>
      <div className="md:min-w-md flex flex-col bg-white rounded-xl shadow p-3">
        <h3 className="text-lg font-bold text-gray-800 border-zinc-200 border-dashed border-b-1 mb-2 py-6 text-xl">Daily Recommendations</h3>
        {(dailyGoals !== null && !show_goals_form) ? (
          <div className="h-full flex flex-col justify-center space-y-5 p-2">
            {['calories', 'protein', 'carbs', 'fat'].map((key, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  <span className="text-sm font-medium text-gray-700">{daily_data[key]}/{dailyGoals[key]}{key === 'calories' ? ' kcal' : 'g'}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full ${key === 'calories' ? 'bg-blue-600' : key === 'protein' ? 'bg-green-600' : key === 'carbs' ? 'bg-amber-500' : 'bg-red-500'}`} style={{width: `${Math.min((daily_data[key] / dailyGoals[key]) * 100, 100)}%`}}></div>
                </div>
              </div>
            ))}
            <div className='flex gap-1 items-center ml-auto mt-auto'>
              <label className='text-gray-600'>Upate Daily Goals</label>
              <button className='text-blue-500 hover:underline cursor-pointer' onClick={() => setShow_goals_form(true)}>
                Update
              </button>
            </div>
          </div>
        ) : (
          <div>
            {show_goals_form ? (
              <DailyGoalsForm setNotification={setNotification} setShow_goals_form={setShow_goals_form}/>
            ) : (
              <div className='flex flex-col'>
                <label className='text-gray-600'>Set Daily Recommendations:</label>
                <button className='font-semibold ml-auto border rounded bg-pink-400 p-2 text-white' onClick={() => setShow_goals_form(true)}>
                  + setGoals
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="w-full bg-white rounded-xl shadow overflow-hidden">
        <div className="p-4 md:p-6 border-b border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-gray-800">Nutrition Analysis</h2>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Days:</label>
                <input type="number" value={days} onChange={(e) => setDays(e.target.value)} className="w-16 p-2 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500" min="1" max="30" />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Metric:</label>
                <select value={currentOption} onChange={(e) => setCurrentOption(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2">
                  {options.map((option, index) => (<option key={index} value={option.value}>{option.label}</option>))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Chart:</label>
                <select value={currentChart} onChange={(e) => setCurrentChart(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2">
                  {charts.map((chart, index) => (<option key={index} value={chart.value}>{chart.label}</option>))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 md:p-6">
          <div className="h-80">
            {currentChart === 'bar' ? (
              <BarChart series={series} />
            ) : currentChart === 'multi_bar' ? (
              <ColumnChartCard series={series} />
            ) : currentChart === 'line' ? (
              <DataLabelsChart series={series} unit={'g'} />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                  <p className="text-gray-500">Pie Chart Visualization</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutritionDashboard;
