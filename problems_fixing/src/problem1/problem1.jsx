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
    const [isclick, setIsclick] = useState(items.map(item =>(
        {id: item.id, click: false}
    )))
    const [val, setVal] = useState(0)

    function handleOnAdd(value){
     setNextid(nextid+1)
     setIsclick([
        ...isclick,
        {
            id: nextid,
            click: false
        }
     ])
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

    function handleOnCha(item){
        setIsclick(isclick.map(iscli =>{
            if(iscli.id === item.id && !iscli.click){
                 return {...iscli, click: true}
            }
            if(iscli.id === item.id && iscli.click){
                return {...iscli, click: false}
           }
            return iscli
    }))
    isclick.map(iscli =>{
        if(iscli.id === item.id){
            iscli.click? setVal(val - 1) : setVal(val + 1)
       }
    })
    }

    function handleOnChaDel(item){
        isclick.map(iscli =>{
            if(iscli.id === item.id){
                iscli.click && setVal(val - 1)
           }
          })
    }

return(
        <div>
            <AddItem onAdd={handleOnAdd}/>
            <PackingList items={items} onDelete={handleOnDelete} onChan={handleOnCha} onChanDel={handleOnChaDel}/>
            <hr/>
            <h2>{val} out of {items.length}</h2>
        </div>
    );
}