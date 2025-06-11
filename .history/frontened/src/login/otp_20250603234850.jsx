function Otp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="mx-auto flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">OTP Verification</h2>
            <p className="text-gray-500 mt-2">
              We've sent a 6-digit code to your email
              <span className="block font-medium text-indigo-600">john****@example.com</span>
            </p>
          </div>
          
          <form className="w-full space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-3 text-center">
                Enter the code sent to your email
              </label>
              
              <div className="flex justify-center space-x-3 mb-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <input
                    key={item}
                    type="text"
                    maxLength={1}
                    className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  />
                ))}
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <div className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Code expires in: 02:45</span>
                </div>
                
                <button 
                  type="button"
                  className="text-indigo-600 font-medium hover:text-indigo-800 hover:underline transition-colors"
                >
                  Resend code
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-xl font-medium shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Verify OTP
            </button>
            
            <div className="mt-6 text-center">
              <button 
                type="button"
                className="flex items-center justify-center mx-auto text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to sign up
              </button>
            </div>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              Having trouble? <a href="#" className="text-indigo-600 font-medium hover:underline">Contact support</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2023 FitNest. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Otp;