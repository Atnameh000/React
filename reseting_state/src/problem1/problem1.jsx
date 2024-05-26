import { useState } from "react";

export default function Display(){
    const [isclick, setIsclick] = useState(false)
    const [text, setText] = useState('')
    return(
        <div>
           {isclick && <h1>the fuck you are</h1>}
           <Comp />
           <button
             onClick={e => setIsclick(!isclick)}
           >show hint</button>
        </div>
    );
}

function Comp(){
    return(
        <div>
           <textarea />
        </div>
    );
}