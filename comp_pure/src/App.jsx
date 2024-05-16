import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Circle from './pure_component'
import Dispaly from './impure_component'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Circle /> */}
      <Dispaly />
    </>
  )
}

export default App
