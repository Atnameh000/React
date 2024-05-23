import { useState } from "react";
import './Paking.css'

export default function PackingList({items,onDelete,onChan,onChanDel}){
    const itemList = items.slice()
    
    return(
        <div>
                { itemList.map(item =>(
                    <label key={item.id}>
                        <input 
                        type="checkbox"
                        onClick={() => {
                          onChan(item)
                        }}
                        />
                           {' '}
                           <h2>{item.title}</h2>
                           {' '}
                        <button
                           onClick={() =>{
                            onChanDel(item)
                            onDelete(item)
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