import React from 'react';
import { formatDateTime } from '../components/date_time';

function summary(data) {
  return data.reduce((acc, food) => {
    acc.calories += food.calories;
    acc.carbs += food.carbs;
    acc.protein += food.protein;
    acc.fat += food.fat;
    return acc;
  }, { calories: 0, carbs: 0, protein: 0, fat: 0 });
}

function FoodLogTable({ log_data }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="p-4 md:p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Food Log</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">Image</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Calories</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Carbs (g)</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Protein (g)</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Fat (g)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {log_data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{formatDateTime(item.createdAt).date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                <td className="w-full items-center flex justify-center">
                  <img src={item.image} alt="" className='h-13 w-13 p-1 rounded-xl object-cover'/>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{item.calories}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{item.carbs}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{item.protein}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{item.fat}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50 border-t border-gray-200">
            <tr>
              <td className="px-6 py-3 text-sm font-bold text-gray-900 text-right"></td>
              <td className="px-6 py-3 text-sm font-bold text-gray-900">Total</td>
              <td className="px-6 py-3 text-sm font-bold text-gray-900"></td>
              <td className="px-6 py-3 text-sm font-bold text-gray-900 text-right">{summary(log_data).calories.toFixed(0)}</td>
              <td className="px-6 py-3 text-sm font-bold text-gray-900 text-right">{summary(log_data).carbs.toFixed(0)}</td>
              <td className="px-6 py-3 text-sm font-bold text-gray-900 text-right">{summary(log_data).protein.toFixed(0)}</td>
              <td className="px-6 py-3 text-sm font-bold text-gray-900 text-right">{summary(log_data).fat.toFixed(0)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default FoodLogTable;
