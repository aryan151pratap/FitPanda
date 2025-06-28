import { useEffect } from "react";

function Notify({ notification, setNotification }) {
  const handleClose = () => {
    if (notification.length > 0) {
      setNotification('');
    }
  };

  useEffect(() => {
    if (notification.length > 0) {
      const timer = setTimeout(() => {
        setNotification('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification, setNotification]);

  if (!notification) return null;

  return (
    <div className="fixed top-4 right-4 z-50 w-full max-w-xs animate-fadeIn">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="flex justify-between items-start p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <svg 
                  className="w-4 h-4 text-blue-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <h3 className="font-medium text-gray-900">Notification</h3>
              <div className="mt-1 text-sm text-gray-500">
                <p>{notification}</p>
              </div>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
            aria-label="Close notification"
          >
            <svg 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-blue-500 animate-progress" 
            onAnimationEnd={handleClose}
          />
        </div>
      </div>
    </div>
  );
}

export default Notify;
