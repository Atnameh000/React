import { useState } from "react";

export default function Display(){
    const [isclick, setIsclick] = useState(false)
    if(isclick){
        return(
            <div>
               <h1>Hint: My name is Hemanta</h1>
               <Comp key='comp'/>
            </div>
        );
    }
    return(
        <div>
           <Comp key='comp'/>
           <button
             onClick={e => setIsclick(!isclick)}
           >show hint</button>
        </div>
    );
}

function Comp(){
    const [text, setText] = useState('')
    return(
        <div>
          <textarea 
             value={text}
             onChange={e => setText(e.target.value)}
           />
        </div>
    );
}