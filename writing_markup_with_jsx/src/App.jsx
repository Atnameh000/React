

// function Apple(){
//   return(
//        <h1>Apple is the best fruit there in the world</h1>
//   );
// }

// function Mango(){
//   return(
//     <h1>No,I'am the king of the fruits</h1>
//   );
// }

// export default function Fruits(){
//   return (
//     <>
//     <Apple />
//     <Mango />
//     </>
//   );
// }

import { useState } from "react";

const fruits = [
  {fId:1,fName:'apple'},
  {fId:2,fName:'mango'},
  {fId:3,fName:'orange'},
  {fId:4,fName:'pineapple'},
];

function Fruits(){
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  function Output(){
    if(count == 5){
      setCount(1);
    }
    if(fruits[count - 1]){
      return fruits[count - 1].fName
    }
  
  }


  return(
   <>
    <button onClick={handleClick}>click here to add fruits</button>
    <h1>Fruit {count} = {Output()}</h1>
   </>
  );
}


export default function App(){
  return(
    <>
    <h1>Fruit count</h1>
    <Fruits />
    <h1>Fruit count</h1>
    <Fruits />
    </>
  );
}