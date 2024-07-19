import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(["Eat breakfast"])

  const handleOnAdd = () =>{
      const inp = document.getElementById('inputbox');
      setData(d => [...d,inp.value])
      setTimeout(() => inp.value = '',5);
  }

  const handleOnDel = (index) =>{
       const upData = data.filter((_,i) => i !== index)
       setData(upData)
  }

  const handleOnUp = (i) =>{
    if(i > 0){
      const newdata = [...data];
      [newdata[i],newdata[i - 1]] = [newdata[i - 1],newdata[i]];
      setData(newdata);
    }
}

const handleOnDown = (i) =>{
  if(i + 1 !== data.length){
    const newdata = [...data];
    [newdata[i],newdata[i + 1]] = [newdata[i + 1],newdata[i]];
    setData(newdata);
  }
}

  return (
    <>
    <div className='main'>
    <h1>To-Do-List</h1>
      <label className='inputfield'>
         <input type='text' placeholder='Enter a task...' id='inputbox'/>
         <button onClick={handleOnAdd}>Add</button>
      </label>
      <div  className='datafield' >
      {data.map((d,index) =>{
        return(
          <div key={index}>
            <p>{d}</p>
              <button className='del' onClick={() => {
                                                handleOnDel(index);
                                               }}>Delete</button>
              <button className='point' onClick={() => handleOnUp(index)}>👆</button>
              <button className='point' onClick={() => handleOnDown(index)}>👇</button>
          </div>
        )
      })}
      </div>
    </div>
    </>
  )
}

export default App
