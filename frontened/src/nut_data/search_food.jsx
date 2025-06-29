import React, { useState } from 'react';
import { useEffect } from 'react';
const apiUrl = import.meta.env.VITE_BACKEND_ADD;

function Search({ setSearch_data, setShow_form }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Simulated API URL for demonstration

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsLoading(true);
    try {
      // Simulate API call delay
       const res = await fetch(`${apiUrl}/search/?q=${query}`, {
        method: 'GET',
        credentials: 'include'
      });
      // Mock data for demonstration
      const result = await res.json();
      if (res.ok) {
        setResults(result);
      }
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!query.trim()) setResults([]);
  }, [query])
  return (
    <div className="mx-auto md:p-2 rounded-2xl bg-gradient-to-br from-white to-gray-50">      
      <form onSubmit={handleSearch} className="flex sm:flex-row gap-3 px-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try 'salad', 'breakfast', or 'high protein'..."
            className="w-full outline-none pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
        <button 
          type="submit" 
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium p-3 px-4 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition shadow-md hover:shadow-lg disabled:opacity-70"
          disabled={isLoading || !query.trim()}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {/* Searching... */}
            </div>
          ) : (
             <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          )}
        </button>
      </form>

      <div className={`${results.length > 0 ? "h-[400px]" : "h-fit"} overflow-auto`}>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-600">Finding delicious meals...</p>
          </div>
        ) : results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {results.map((food) => (
              <div key={food.id} className="flex gap-4 items-center p-2 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex-shrink-0 border-dashed border-2 rounded-xl">
                  <div className="h-12 w-12 sm:h-18 sm:w-18 rounded-xl overflow-hidden border-2 border-white shadow-sm">
                    <img 
                      src={food.image} 
                      alt={food.name} 
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.parentNode.innerHTML = '<div class="h-full w-full bg-gray-100 flex items-center justify-center"><svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></div>';
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-800 truncate">{food.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full capitalize">
                      {food.meal}
                    </span>
                  </div>
                  
                  <div className='flex flex-row items-center justify-center'>
                    <div className="flex w-full mt-2 grid grid-cols-4 gap-2">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-700">{food.calories}</div>
                        <div className="text-xs text-gray-500">kcal</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-green-600">{food.protein}g</div>
                        <div className="text-xs text-gray-500">protein</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-yellow-600">{food.carbs}g</div>
                        <div className="text-xs text-gray-500">carbs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-red-600">{food.fat}g</div>
                        <div className="text-xs text-gray-500">fat</div>
                      </div>
                    </div>
                    <div className=''>
                      <button className='bg-green-200 rounded-full text-green-700 px-2 py-1 text-sm cursor-pointer'
                      onClick={() => {
                        setSearch_data(food);
                        setShow_form(true);
                      }}
                      >
                        +Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;