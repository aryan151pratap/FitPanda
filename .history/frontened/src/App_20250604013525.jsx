import { useState } from 'react'
import './App.css'
import Page_1 from './components/page_1';
import Sign_up from './login/sign_up';
import Otp from './login/otp';

function App() {
	const [otp, setOtp] = useState(true);

  const [data, setData] = useState({});

  return (
    <>
    <div className=''>
      {otp ?
      <Sign_up setOtp={setOtp} setData={setData}/>
      :
      <Otp setOtp={setOtp}/>
      }
    </div>
    </>
  )
}

export default App
