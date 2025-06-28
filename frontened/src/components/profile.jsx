import { useState } from 'react';

function Profile({ data }) {
  const [edit, setEdit] = useState(data);
  const [showEdit, setShowEdit] = useState(false);
  const [tempEmail, setTempEmail] = useState(data.email);

  const handleSave = () => {
    setEdit({ ...edit, email: tempEmail });
    setShowEdit(false);
  };

  const handleCancel = () => {
    setTempEmail(edit.email);
    setShowEdit(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-zinc-900">
      <div className="w-full mx-auto p-2">
        <div className="bg-zinc-800 text-white shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="relative">
            <div className="h-32 bg-gradient-to-r from-indigo-700 to-purple-700"></div>
            <div className="absolute -bottom-16 left-6 sm:left-8">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-1 rounded-full">
                <div className="bg-white p-1 rounded-full">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-24 h-24 md:w-32 md:h-32" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="pt-20 pb-6 px-6 sm:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl md:text-3xl font-bold">{data.username}</h1>
                  {data.verified && (
                    <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  
                  {showEdit ? (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={tempEmail}
                        onChange={(e) => setTempEmail(e.target.value)}
                        className="bg-zinc-700 text-white px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        autoFocus
                      />
                      <div className="flex gap-2">
                        <button 
                          onClick={handleSave}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm transition-colors"
                        >
                          Save
                        </button>
                        <button 
                          onClick={handleCancel}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-md text-sm transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                    <div className="flex items-center gap-3">
                      <p className="text-gray-300">{edit.email}</p>
                      <button 
                        onClick={() => setShowEdit(true)}
                        className="text-gray-400 hover:text-white transition-colors"
                        title="Edit email"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                    </div>
                    </>
                  )}
                </div>
              </div>
              
              <button className="mt-4 sm:mt-0 flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Contact
              </button>
            </div>
            
            <div className="border-t border-zinc-700 pt-6 mt-6">
              <h2 className="text-xl font-bold mb-4">Fitness Metrics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricCard 
                  title="Body Fat" 
                  value="15%" 
                  trend="down" 
                  description="Healthy range"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  }
                />
                
                <MetricCard 
                  title="Body Weight" 
                  value="65 kg" 
                  trend="stable" 
                  description="Ideal weight"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  }
                />
                
                <MetricCard 
                  title="Height" 
                  value="175 cm" 
                  trend="up" 
                  description="Good posture"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  }
                />
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Activity Stats</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard title="Workouts" value="24" />
                <StatCard title="Avg. Duration" value="45 min" />
                <StatCard title="Calories" value="12,450" />
                <StatCard title="Streak" value="18 days" />
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition-colors">
                View Progress
              </button>
              <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition-colors">
                Workout History
              </button>
              <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition-colors">
                Nutrition Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for metric cards
function MetricCard({ title, value, trend, description, icon }) {
  const trendColor = trend === 'down' ? 'text-green-500' : trend === 'up' ? 'text-red-500' : 'text-yellow-500';
  const trendIcon = trend === 'down' ? '↓' : trend === 'up' ? '↑' : '→';
  
  return (
    <div className="bg-zinc-700 rounded-xl p-4 hover:bg-zinc-600 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <div className="text-indigo-400">
              {icon}
            </div>
            <h3 className="font-semibold">{title}</h3>
          </div>
          <div className="mt-2 flex items-end gap-2">
            <p className="text-2xl font-bold">{value}</p>
            <span className={`${trendColor} font-medium`}>{trendIcon}</span>
          </div>
        </div>
      </div>
      <p className="mt-2 text-gray-400 text-sm">{description}</p>
    </div>
  );
}

// Component for stat cards
function StatCard({ title, value }) {
  return (
    <div className="bg-zinc-700 rounded-xl p-4 hover:bg-zinc-600 transition-colors">
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-xl font-bold mt-1">{value}</p>
    </div>
  );
}

export default Profile;