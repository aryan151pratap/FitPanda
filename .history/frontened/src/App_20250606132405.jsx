import { useEffect, useState } from 'react'
import './App.css'
import Page_1 from './components/page_1';
import Sign_up from './login/sign_up';
import Otp from './login/otp';
import Notify from './notification/notify';
import Save_data from './about_user/save_data';

function App() {
	const [otp, setOtp] = useState(true);

  const [data, setData] = useState({});
  const [login, setLogin] = useState(true);

  const [notification, setNotification] = useState('');


  useEffect(async () => {
      const res = await fetch(`${apiUrl}/valid/sign_up`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });		
      const result = await res.json();
      console.log(result);

      setNotification(result.message);

      if (res.ok) {
        setOtp(false);
      } else {
        console.error(result.message || 'Login failed');
      }
  })

  return (
    <>
    <div className=''>
      {!login ?
        <div>
        {otp ?
        <Sign_up setOtp={setOtp} setEmail={setData} setNotification={setNotification}/>
        :
        <Otp setOtp={setOtp} data={data} setNotification={setNotification}/>
        }
        </div>
        :
        <div>
          {/* <Page_1/> */}
          <Save_data setNotification={setNotification}/>
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
