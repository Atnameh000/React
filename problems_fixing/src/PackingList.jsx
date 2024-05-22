import { useState } from "react";
import './Paking.css'

export default function PackingList({items}){
    return(
        <div>
                { items.map(item =>(
                    <label key={item.id}>
                        <input type="checkbox"/>
                           {' '}
                           <h2>{item.title}</h2>
                           {' '}
                        <button>Delete</button>
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