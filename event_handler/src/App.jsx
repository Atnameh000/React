import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Display from './onclick'
import Print from './default'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Display /> */}
     <Print />
    </>
  )
}

export default App
