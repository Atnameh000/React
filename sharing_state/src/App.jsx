import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './problem1/problem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Display />
    </>
  )
}

export default App
