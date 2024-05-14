import { useState } from 'react';
import './first_comp.css'

export default function MyFunction(){
    const [inputvalue,setinputvalue] = useState('')
    const handleEventChange = (event) =>{
        setinputvalue(event.target.inputvalue)
    }
    // function handleClick(){
    //     <MyFunction />
    // }

    return (
        <>
        <div className='field'>
        <input type='text' className='Namefield' value={inputvalue} onChange={handleEventChange}></input>
        </div>
        {console.log(inputvalue)}
        {/* <button className='magic' onClick={handleClick}>click for magic</button> */}
        </>
    );
}