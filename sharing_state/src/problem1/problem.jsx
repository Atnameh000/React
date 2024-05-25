import { useState } from "react";

export default function Display(){
    const [text, setText] = useState('')
    return(
        <>
          <Input label='First Name' text={text} setText={setText}/>
          <Input label='Second Name' text={text} setText={setText}/>
        </>
    );
}


function Input({label,text,setText}){
    function handleOnChange(e){
        setText(e.target.value)
    }
    return(
        <div>
            <h2>{label}</h2>
            <input 
              value={text}
              onChange={handleOnChange}
             />
        </div>
    );
}