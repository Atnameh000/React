import Email from "./contact";
import Faculty from "./faculty";
import Profile from "./profile";
import Sem from "./semester";
import { Number } from "./contact";

export default function App(){
  let hide = true;
  return(
    <>
    <div style={{
      display : hide? 'none' : 'block'
     }}>
      <h1>Name = <Profile /></h1>
      <h1>Faculty = <Faculty /></h1>
      <h1>Semester = <Sem /></h1>
     </div>
     <br></br>
     <h1>Contact Information:</h1>
     <Email />
     <Number />
    </>
  );
}

