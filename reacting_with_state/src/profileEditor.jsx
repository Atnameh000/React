import { useState } from 'react'

export default function Profile(){
    const [isactive, setIsactive] = useState(false)
    const [msg, setMsg] = useState({
        firstname: 'hemanta',
        lastname: 'neupane'
    })
    
    return(
        <div>
            <h2>First Name: {isactive?
            <input value={msg.firstname}
              onChange={e => {
                setMsg({
                ...msg,
                firstname: e.target.value
             })}}
            />
            : 
            msg.firstname
            }</h2>
            <h2>Last Name: {isactive?
            <input value={msg.lastname}
            onChange={e => {
              setMsg({
              ...msg,
              lastname: e.target.value
           })}}
          />
            : 
            msg.lastname
            }</h2>
            <button
              onClick={() => setIsactive(!isactive)}
            >{isactive?'Save profile':'Edit profile'}</button>
            <br/>
            <br/>
            <i>Hello {msg.firstname} {msg.lastname}!</i>
        </div>
    );
}