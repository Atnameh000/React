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
    const [value, setValue] = useState(0)

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

    function handleOnDelete(item){
        setItems(items.filter(i => (
            i.id !== item.id
        )))
    }

    function handleOnCan(val){
        setValue(val)
    }

    return(
        <div>
            <AddItem onAdd={handleOnAdd}/>
            <PackingList items={items} onDelete={handleOnDelete} onCan={handleOnCan}/>
            <hr/>
            <h4>{value} selected</h4>
        </div>
    );
}