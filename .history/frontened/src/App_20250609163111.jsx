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


  useEffect(() => {
    const check_auth = async function(){

      try{

        const res = await fetch(`${apiUrl}/valid/auth`, {
          credentials: 'include',
        });      
        const result = await res.json(); 
        console.log(result.user);
        
        setNotification(result);
        
        if (res.ok) {
          if(result.user.gender !== 'other' && result.user.height !== 0 && result.user.weight !== 0 && result.user.age !== 0){
            
            setInside(true);
          }
          setCurrent_user(result.message);
          console.log(result.message);
          setAuthentication(false);

        } else {
          setCurrent_user(null);
          console.error(result.message || 'Login failed');
        }
      } catch (err) {
        console.error('Error:', err);
      }
    }
    check_auth();
  }, [otp]);

  return (
    <>
    <div className=''>
      {authentication ?
        <div>
          {!otp ?
            <Sign_up setOtp={setOtp} setEmail={setData} setNotification={setNotification} setAuthentication={setAuthentication}/>
          :
            <Otp setOtp={setOtp} data={data} setNotification={setNotification} setAuthentication={setAuthentication}/>
          }
        </div>
      :
        <div>
          {inside ?
          <Page_1 details={}/>
          :
          <Save_data setNotification={setNotification} setInside={setInside}/>
          }
        </div>
      }

      <div>
        {notification.length > 0 && 
          <Notify notification={notification} setNotification={setNotification}/>
        }
      </div>
    </div>
    </>
  )
}

export default App
