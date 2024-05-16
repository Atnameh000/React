// import { useState } from 'react'
// import { people } from './data'


// export default function Display(){
//     const [index,setIndex] = useState(0)

//     function handleOnClickChoice(){
//       if(index === people.length - 1){
//         handleOnClickLast()
//       }else{
//         handleOnClickNext()
//       }
//     }

//     function handleOnClickNext(){
//        setIndex(index + 1)
//     }
//     function handleOnClickLast(){
//        alert('No more data')
//        setIndex(index)
//    }

//     function handleOnClickPre(){
//       setIndex(index - 1)
//   }
    
//     let p = people[index]
//     return(
//         <>
//           {/* <button onClick = {handleOnClickNext}
//           style = {{
//             display: index === people.length - 1? 'none' : 'block'
//           }}
//           >
//             Next
//           </button> */}
//           <button onClick = {handleOnClickChoice} >
//             Next
//           </button>
//           <button onClick = {handleOnClickPre}
//           style = {{
//             display: index === 0? 'none' : 'block'
//           }}
//           >
//             Previous
//           </button>
//           <h1>{p.id}</h1>
//           <h1>{p.name}</h1>
//           <h1>{p.email}</h1>
//         </>
//     );
// }


import { useState } from 'react'

export default function Display(){
  const [message, setMessage] = useState('')
  
  function handleOnChange(event){
    setMessage(event.target.value)
  }

  return (
    <>
       <input 
         value = {message}
         onChange = {handleOnChange}
       />
       <h1>Hi,{message}</h1>
    </>
  );
}