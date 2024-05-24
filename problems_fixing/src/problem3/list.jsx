import { useState } from "react";

export default function List({items}){
    const itemList = items.slice()
    const [it, setIt] = useState(itemList)
    const [val, setVal] = useState(0)


    function handleOnClick(item){
        setIt(it.map(i =>{
            if(i.id === item.id){
                return {...i, click: !item.click}
            }
            return i
        }))
    }
   return(
    <>
       <ul>
          {it.map(item =>(
            <li key={item.id}>
                <div
                  onClick={() =>{
                    item.click? setVal(val - 1) : setVal(val + 1)
                    handleOnClick(item)
                }}
                 style={{
                    backgroundColor: item.click && 'gray'
                 }}
                >
                    <input 
                    className="element"
                    type="checkbox"
                    checked= {item.click}
                    onChange={() => item.click? setVal(val - 1) : setVal(val + 1)}
                    />
                    <h2
                    style={{
                        display: 'inline'
                    }}
                    >{'  '+item.title}</h2>
                 </div>
            </li>
          ))}
       </ul>
       <h1>Total no of selection is: {val}</h1>
    </>
   );
}