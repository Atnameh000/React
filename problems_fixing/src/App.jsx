import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TravelPlan from './problem3/problem3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <TravelPlan />
    </>
  )
}

export default App
