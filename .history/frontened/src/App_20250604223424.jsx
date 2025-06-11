import { useState } from 'react'
import './App.css'
import Page_1 from './components/page_1';
import Sign_up from './login/sign_up';
import Otp from './login/otp';
import Notify from './notification/notify';
import Gender from './about_user/gender';

function App() {
	const [otp, setOtp] = useState(true);

  const [data, setData] = useState({});
  const [login, setLogin] = useState(true);

  const [notification, setNotification] = useState('');


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
          <Gender/>
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
