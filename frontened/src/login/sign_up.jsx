import React, { useState, useEffect } from 'react';
import Login from './login';
import Logo from '../components/logo';
import fitpanda from '../image/fitpanda.png';

const apiUrl = import.meta.env.VITE_BACKEND_ADD;

function Sign_up({ setOtp, setEmail, setNotification, setAuthentication }) {

  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [login_data, setLogin_data] = useState({email: '', password: ''});

  const [sign_in, setSign_in] = useState(false);

  useEffect(()=>{
    if(data.username && data.email && data.password){
      setEmail(data);
    }
  }, [data])

  const handle_sign_up = async function(){
    if(data.username.length > 0 && data.email.length > 0 && data.password.length > 0){
      const res = await fetch(`${apiUrl}/valid/sign_up`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });		
      const result = await res.json();
      console.log(result);

      setNotification(result.message);

      if (res.ok) {
        setOtp(true);
      } else {
        console.error(result.message || 'Login failed');
      }
    } else {
      setNotification("Incomplete data")
    }
  }

  const handle_login = async function(){
    console.log(login_data);
		if(login_data.email.length > 0 && login_data.password.length > 0){
			const res = await fetch(`${apiUrl}/valid/login`, {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
        credentials: 'include',
				body: JSON.stringify(login_data),
			});		
			const result = await res.json();
			console.log(result);

			setNotification(result.message);

			if (res.ok) {
				setOtp(false);
        setAuthentication(false);
			} else {
				setNotification(result.message || 'Login failed');
			}
		} else {
			setNotification("Incomplete data")
		}
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

          {/* Left Section - Brand Showcase */}
          <div className="hidden sm:flex md:flex w-full md:w-2/5 bg-gradient-to-br from-cyan-600 to-cyan-700 p-8 md:p-12 flex flex-col justify-between">
            <div className="flex sm:flex-row md:flex-col sm:items-center gap-4">
              <div className="p-2 rounded-full flex flex-row gap-4">
                <div className="bg-white p-2 w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
                  {/* <img src={apple} alt="" /> */}
                  <Logo/>
                </div>
                <h1 className="text-3xl h-20 p-2 flex justify-center items-center font-bold text-white">FitPanda</h1>
              </div>
              <div className='md:w-full items-center flex justify-center ml-auto'>
                <img src={fitpanda} alt="" className='md:h-60 md:w-60 sm:w-40 sm:h-40'/>
              </div>
            </div>

            
            <div className="mt-auto">
              <h2 className="text-2xl font-bold text-white">Transform Your Fitness Journey</h2>
              <p className="text-indigo-200 mt-4">
                Join our community of fitness enthusiasts and take control of your health goals with personalized tracking and expert guidance.
              </p>
            </div>
            
          </div>
          
          {/* Right Section - Sign Up Form */}
          <div className="w-full md:w-3/5 p-8 md:p-12">
          {!sign_in ?
          <div>
            <div className="text-center mb-10 items-center flex justify-center gap-4">
              <div className='h-20 w-20'>
                <Logo/>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Create Your Account</h2>
                <p className="text-gray-500 mt-2">Join our fitness community today</p>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      value={data.username}
                      onChange={(e) => {
                        setData({...data, username: e.target.value})
                      }}
                      placeholder="e.g. Panda"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                    <div className="absolute right-3 top-3 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={data.email}
                      onChange={(e) => {
                        setData({...data, email: e.target.value})
                      }}
                      placeholder="e.g. panda@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                    <div className="absolute right-3 top-3 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type="password"
                      value={data.password}
                      onChange={(e) => {
                      setData({...data, password: e.target.value})
                      }}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                    <div className="absolute right-3 top-3 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                
              </div>
              
            </form>
          </div>
          :
          <div>
            <Login setLogin_data={setLogin_data}/>
          </div>
          }
          <div className='mt-5'>
            {!sign_in ?
              <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-3 rounded-xl font-medium shadow-lg hover:from-cyan-700 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handle_sign_up}
              >
              Create Account
              </button>
            :
              <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-3 rounded-xl font-medium shadow-lg hover:from-cyan-700 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handle_login}
              >
              Login Account
              </button>
            }
          </div>
          
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-8 text-center text-sm text-gray-600">
                Already have an account? 
                <a href="#" className="ml-1 font-medium text-cyan-600 hover:text-cyan-500 hover:underline"
                onClick={() => {
                  setSign_in(!sign_in);
                }}
                >
                  {!sign_in ? 'Sign in' : 'Sign up'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign_up;