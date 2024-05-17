import { useState } from "react";

export default function Show({todo,handleOnChange,handleOnClickDelete}){
    const [iseditable, setIseditable] = useState(false)
    const [input, setInput] = useState('')

    let content;
    if(iseditable){
        content =
                <>
                  <input 
                    value={input}
                    onChange={e => {
                        setInput(e.target.value)
                    }}
                  />
                  <button
                    onClick={() =>{
                        setIseditable(false);
                        handleOnChange(todo,input)
                    }}
                    >save</button>
                   <button
                    onClick={() =>{
                        handleOnClickDelete(todo.id);
                    }}
                    >Delete</button>
                </>
        
    }else{
        content =
            <>
            <div>
                    <b><i>{todo.title}</i></b>
                    <button
                    onClick={() =>{
                      setIseditable(true)
                    }}
                    >Edit</button>
                    <button
                    onClick={() =>{
                        handleOnClickDelete(todo.id);
                    }}
                    >Delete</button> 
            </div>
            </>
        
    }

    
    return(
        <>
          {content}
        </>
    );
}