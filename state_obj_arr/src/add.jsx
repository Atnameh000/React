import { useState } from "react";

export default function Add({handleOnClickAdd}){
   const [input, setInput] = useState('')

    return(
        <label>
            <input 
              value={input}
              onChange={ e => {
                setInput(e.target.value)
            }}
            />
            <button
                    onClick={() =>{
                        setInput('')
                        handleOnClickAdd(input)
                    }}
             >add</button>
        </label>
    );
}