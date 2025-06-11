import { useState } from 'react'
import './App.css'
import Page_1 from './components/page_1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page_1/>
    </>
  )
}

export default App
