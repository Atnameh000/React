import { useState } from "react";
import './Paking.css'

export default function PackingList({items,onDelete,onCan}){
    const [val, setVal] = useState(0)
    let isclick = false
    
    return(
        <div>
                { items.map(item =>(
                    <label key={item.id}>
                        <input 
                        type="checkbox"
                        onClick={() => {
                          setIsclick(!isclick)
                          isclick? setVal(val - 1) : setVal(val + 1)
                          onCan(val)
                        }}
                        />
                           {' '}
                           <h2>{item.title}</h2>
                           {' '}
                        <button
                           onClick={() =>{
                            isclick && setVal(val - 1)
                            onDelete(item)
                            onCan(val)
                           }}
                        >Delete</button>
                        <br/>
                    </label>
                ))}
        </div>
    );

    // return (
    //     <>
    //       <h2>What's your travel snack?</h2>
    //       <ul>
    //         {items.map((item) => (
    //           <li key={item.id}>
    //             <button>Choose</button>
    //           </li>
    //         ))}
    //       </ul>
    //       <p>You picked</p>
    //     </>
    //   );
    
}