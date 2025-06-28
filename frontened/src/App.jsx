import { useEffect, useState } from 'react'
import './App.css'
import Page_1 from './components/page_1';
import Sign_up from './login/sign_up';
import Otp from './login/otp';
import Notify from './notification/notify';
import Save_data from './about_user/save_data';

const apiUrl = import.meta.env.VITE_BACKEND_ADD;

function App() {
  const [otp, setOtp] = useState(false);
  const [current_user, setCurrent_user] = useState(null);
  const [authentication, setAuthentication] = useState(true);
  const [inside, setInside] = useState(false);
  const [data, setData] = useState({});
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(true); // 👈 New state

  useEffect(() => {
    const check_auth = async function () {
      setLoading(true); // Start loading
      try {
        const res = await fetch(`${apiUrl}/valid/auth`, {
          credentials: 'include',
        });
        const result = await res.json();
        setNotification(result);

        if (res.ok) {
          if (result.user.gender !== 'other' && result.user.height !== 0 && result.user.weight !== 0 && result.user.age !== 0) {
            setInside(true);
          }
          setCurrent_user(result.user);
          setAuthentication(false);
        } else {
          setCurrent_user(null);
          console.error(result.message || 'Login failed');
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false); // End loading
      }
    }

    check_auth();
  }, [authentication]);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-700 text-lg font-medium animate-pulse">Loading, please wait…</p>
          </div>
        </div>      
      ) : authentication ? (
        <div>
          {!otp ? (
            <Sign_up setOtp={setOtp} setEmail={setData} setNotification={setNotification} setAuthentication={setAuthentication} />
          ) : (
            <Otp setOtp={setOtp} data={data} setNotification={setNotification} setAuthentication={setAuthentication} />
          )}
        </div>
      ) : (
        <div>
          {inside ? (
            <Page_1 details={current_user} setNotification={setNotification} setCurrent_user={setCurrent_user}/>
          ) : (
            <Save_data setNotification={setNotification} setInside={setInside} />
          )}
        </div>
      )}

      {notification.length > 0 &&
        <Notify notification={notification} setNotification={setNotification} />
      }
    </div>
  )
}

export default App
