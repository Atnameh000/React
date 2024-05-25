import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Dog from './problem2/problem2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dog />
    </>
  )
}

export default App
