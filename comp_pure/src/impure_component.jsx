import { people } from "./data";

export default function Dispaly(){
    //const peoples = people.slice();
    people.push({
        id: 3,
        name: 'bibek'
    })
    return(
        <>
          {
              people.map(peo =>
                <div key = {peo.id}>
                    <h1>{peo.name}</h1>
                </div>
                )
          }
        </>
    );
}