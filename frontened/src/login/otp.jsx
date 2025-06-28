import { useRef, useState, useEffect } from "react";

const apiUrl = import.meta.env.VITE_BACKEND_ADD;


function Otp({ setOtp, data, setNotification, setAuthentication }) {
  const [otp, setOtpValue] = useState(new Array(6).fill(''));
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtpValue(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalOtp = otp.join('');

    if (finalOtp.length === 6) {
      console.log("Submitted OTP:", finalOtp);

		const res = await fetch(`${apiUrl}/valid/otp/${data.email}`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify({ otp: finalOtp }),
		});		
		const result = await res.json();
			console.log(result);
    setNotification(result.message);

		if (res.ok) {
			setOtp(false);
      setAuthentication(false);
		} else {
			console.error(result.message || 'verification failed');
		}

    } else {
      setNotification("Please fill all 6 digits");
    }
  };

  const [timer, setTimer] = useState(300); // 5 mins in seconds

	useEffect(() => {
	if (timer === 0) return;
	const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
	return () => clearInterval(interval);
	}, [timer]);

	// Display as MM:SS
	const formatTime = (time) => {
	const min = String(Math.floor(time / 60)).padStart(2, '0');
	const sec = String(time % 60).padStart(2, '0');
	return `${min}:${sec}`;
	};

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
          <div className="text-center mb-8">
            <div className="mx-auto flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">OTP Verification</h2>
            <p className="text-gray-500 mt-2">
              We've sent a 6-digit code to your email
              <span className="block font-medium text-indigo-600">{data.email}</span>
            </p>
          </div>

          <form className="w-full space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-3 text-center">
                Enter the code sent to your email
              </label>

              <div className="flex justify-center space-x-3 mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputsRef.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                ))}
              </div>

              <div className="flex justify-between items-center text-sm">
                <div className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Code expires in: {formatTime(timer)}</span>
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
                onClick={() => setOtp(false)}
                className="flex items-center justify-center mx-auto text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to sign up
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Otp;
