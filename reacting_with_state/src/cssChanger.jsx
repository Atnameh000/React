
import { useState } from "react";
import './cssChanger.css'

export default function Changer(){
 
    const [isactive, setIsactive] = useState(false)

    function handleOnClickImg(e){
        e.stopPropagation()
        setIsactive(true)
    }

    function handleOnClickDiv(){
        setIsactive(false)
    }

    return(
        <div
         className="background"
         onClick={handleOnClickDiv}
         style={{
                height: 600,
                width: 600,
                backgroundColor: isactive? 'plum' : 'lightskyblue',
                display: 'flex',
                alignContent: 'center',
                alignItems: 'center'
         }}
        >
        <img 
            className={isactive? 'picture' : 'picture-active'}
            onClick={handleOnClickImg}

            alt="Rainbow houses in Kampung Pelangi, Indonesia"
            src="https://i.imgur.com/5qwVYb1.jpeg"
        />
        </div>
    );

}

{/* // function Img(){
//     return(
//         <div
//             style={{
//                 paddingLeft: '16.5%',
//                 border: 10,
//                 borderBlock: 'solid',
//                 borderBlockColor: 'black',
//                 height: 400,
//                 width: 400,    
//             }}
//         >
//              <img 
//             className="picture"
//             alt="Rainbow houses in Kampung Pelangi, Indonesia"
//             style={{
//                 height: 400,
//                 width: 400,    
//              }}
//             src="https://i.imgur.com/5qwVYb1.jpeg"
//             />
//         </div>
//     );
// } */}