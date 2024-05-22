import { useState } from "react";
import AddItem from "./AddItem";
import PackingList from "./PackingList";


    const itemList =[{
       title:'hemanta',
       id:0
    },
    {
        title:'heman',
        id:1
    },
    {
        title:'hem',
        id:2
    }]

export default function Display(){
    const [items, setItems] = useState(itemList)
    const [nextid, setNextid] = useState(3)

    function handleOnAdd(value){
     setNextid(nextid+1)
     setItems([
        ...items,
        {
            title: value,
            id: nextid
        }
    ])
    }

    return(
        <div>
            <AddItem onAdd={handleOnAdd}/>
            <PackingList items={items} />
            <hr/>
            <h4> out of</h4>
        </div>
    );
}