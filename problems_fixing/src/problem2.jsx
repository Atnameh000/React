import { useState } from "react";
import AddItem from "./AddItem";
import PackingList from "./PackingList";

export default function Display(){
    return(
        <div>
            <AddItem />
            <PackingList />
        </div>
    );
}