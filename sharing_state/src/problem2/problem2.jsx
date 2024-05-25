import { useState } from "react";

const itemlist =[
    {
        id: 0,
        title: 'ram',
        descrip: 'he is one of hindu god'
    },{
        id: 1,
        title: 'ganesh',
        descrip: 'he is one of hindu god'
    },{
        id: 2,
        title: 'laxman',
        descrip: 'he is one of hindu god'
    },{
        id: 3,
        title: 'shiva',
        descrip: 'he is one of hindu god'
    },{
        id: 4,
        title: 'bishnu',
        descrip: 'he is one of hindu god'
    },
]


export default function Dog(){
    const [items, setItems] = useState(itemlist)

    function handleOnChange(e){
      setItems(items.filter(item => item.title === e.target.value))
    }
    return(
        <>
         <h1>Search:
        <input 
          onChange={handleOnChange}
         /></h1>
         {items.map(item =>(
            <label key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.descrip}</p>
            </label>
         ))}
        </>
    );
}