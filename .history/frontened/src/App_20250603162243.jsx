import { useState } from 'react'
import './App.css'
import Page_1 from './components/page_1';
import Sign_up from './login/sign_up';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=''>
      <Sign_up/>
      <Page_1/>
    </div>
    </>
  )
}

export default App
