import { useState } from 'react'
import './App.css'
import Test, { Test1 } from './Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Test/>
      <Test1/>
    </>
  )
}

export default App
