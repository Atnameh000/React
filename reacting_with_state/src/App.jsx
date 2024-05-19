import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Changer from './cssChanger'
import Profile from './profileEditor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Changer /> */}
     <Profile />
    </>
  )
}

export default App
