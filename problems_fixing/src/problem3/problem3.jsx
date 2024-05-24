import { useState } from "react";
import List from "./list";

const items = [{
    id: 0,
    title: 'hello my name is hemanta',
    click: false
},
{
    id: 1,
    title: 'hello my name is ram',
    click: false
},
{
    id: 2,
    title: 'hello my name is hemanta',
    click: false
},
{
    id: 3,
    title: 'hello my name is ram',
    click: false
},
{
    id: 4,
    title: 'hello my name is hemanta',
    click: false
},
{
    id: 5,
    title: 'hello my name is ram',
    click: false
}
]

export default function Sate(){
    return(
        <>
          <h1>Inbox</h1>
          <List items={items} />
        </>
    );
}