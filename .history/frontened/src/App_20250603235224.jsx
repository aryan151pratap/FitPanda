import { useState } from 'react'
import './App.css'
import Page_1 from './components/page_1';
import Sign_up from './login/sign_up';
import Otp from './otp';

function App() {
	const [otp, setOtp] = useState(false);

  return (
    <>
    <div className=''>
      {otp ?
      <Sign_up setOtp={setOtp}/>
      :
      <Page_1/>
      }
    </div>
    </>
  )
}

export default App
