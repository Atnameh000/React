import { Fragment } from "react";
import { peoples } from "./data";
import './list.css'

function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    );
}

function Design({id,name,address,email}){
    return(
        <div className="card">
            <h5>ID: {id}</h5>
            <h5>NAME: {name}</h5>
            <h5>ADDRESS: {address}</h5>
            <h5>EMAIL: {email}</h5>
        </div>
    );
}

function Mapper({list}){
    return(
        <>
         {
            list.map(people =>
                <Card key = {people.id}>
                    <Design {...people} />
                </Card>
                )
         }
        </>
    );
}

export default function Dispaly(){
    const palungtar = peoples.filter(people =>
       people.address === 'palungtar'
    );
    return(
        <div>
         <Mapper list = {peoples} />
         <Mapper list = {palungtar} />
        </div>
    );
}