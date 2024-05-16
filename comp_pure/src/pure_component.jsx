
function Card({children}){
    return(
        <div style={{
            height : 200,
            width : 400,
            backgroundColor : 'black',
            color: 'white',
            borderRadius: 10,
            paddingTop: 10,
        }}>
            {children}
        </div>
    );
}


function Area({r}){
    return (
        <div style={{
            height : 200,
            width : 400,
            backgroundColor : 'black',
            color: 'white',
            borderRadius: 10,
            paddingTop: 10,
        }}>
            <h1>Area: {3.14*r*r}</h1>
            <h1>Circumference: {2*3.14*r}</h1>
        </div>
    );
}

function Mapper({r}){
     return(
        <Card>
             <Area r = {r} />
        </Card>
     );
}

export default function Circle(){
    const radius = [1,2,3,4,5];
    return(
        <> 
          {radius.map(r => 
          <>
          <h1>Cirlce elements with radius {r}</h1>
          <Mapper r = {r} />
          </>
          )}
        </>
    );
}

