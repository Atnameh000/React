import { useState } from "react";

export default function AddItem({onAdd}){
    const [title,setTitle] = useState('')
    return(
        <div>
           <label>
             <input 
              value={title}
              placeholder="Add item"
              onChange={e => {
                setTitle(e.target.value)
              }}
             />
             <button
              onClick={() => {
                setTitle('')
                onAdd(title)
              }}
             >Add</button>
           </label>
        </div>
    );
}