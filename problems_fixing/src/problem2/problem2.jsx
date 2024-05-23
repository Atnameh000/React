import { useState } from "react";

const ite = [{
    id:0,
    value:'my sunshine',
    isclick: false,
    ishighlite: false
},
{
    id:1,
    value:'my sunshine is the only way to heaven',
    isclick: false,
    ishighlite: false
},
{
    id:2,
    value:'my sunshine',
    isclick: false,
    ishighlite: false
},
{
    id:3,
    value:'my sunshine is the only way to heaven',
    isclick: false,
    ishighlite: false
},
{
    id:4,
    value:'my sunshine',
    isclick: false,
    ishighlite: false
},
{
    id:5,
    value:'my sunshine is the only way to heaven',
    isclick: false,
    ishighlite: false
},
{
    id:6,
    value:'my sunshine',
    isclick: false,
    ishighlite: false
},
{
    id:7,
    value:'my sunshine is the only way to heaven',
    isclick: false,
    ishighlite: false
},
]

export default function Send(){
    const [click, setClick] = useState(ite)

   return(
    <>
       <h1>Inbox</h1>
       <ul>
        {click.map(item =>(
            <li key={item.id}>
                <div
                  onFocus={() =>{
                    setClick(click.map(i =>{
                        if(i.id === item.id){
                            return {...item, ishighlite: true}
                        }
                        return {...i, ishighlite: false}
                    }))
                  }}
                  onPointerMove={() =>{
                    setClick(click.map(i =>{
                        if(i.id === item.id){
                            return {...item, ishighlite: true}
                        }
                        return {...i, ishighlite: false}
                    }))
                  }}
                  style={{
                    backgroundColor: item.ishighlite? 'gray' : ''
                  }}
                >
                    <button
                    onClick={
                        () =>{
                            setClick(click.map(i =>{
                                if(i.id === item.id){
                                    return {...item, isclick: !item.isclick}
                                }
                                // if(i.id === item.id && item.isclick){
                                //     return {...item,isclick: false}
                                // }
                                return i;
                            }))
                        }
                    }
                    >
                        {
                            item.isclick? 'unstar' : 'star'
                        }
                    </button>
                    <h2 style={{
                        display: 'inline'
                    }}>{'  '+item.value}</h2>
                </div>
            </li>
        ))}
       </ul>
    </>
   );
}