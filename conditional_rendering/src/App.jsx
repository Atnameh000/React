import { useState } from 'react'
import './App.css'
import Drin from './drink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Drin />
    </>
  )
}

export default App
