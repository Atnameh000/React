
function Price({name,money}){
       if(money > 1000){
        return(
            <div>
                <i><h1>The price for {name} is expensive</h1></i>
            </div>
        );
       }
       return(
        <div>
            <i><h1>The price for {name} is less expensive</h1></i>
        </div>
       );
}

function Taste({name,flavor,money}){
    return(
        <div>
            {flavor === 'sweet'? (<Price name = {name} money = {money}/>):(<h1>This has {flavor} taste</h1>)}
        </div>
    );
}

export default function Drin(){
    let drink = true;
    let name = 'rasna';
    let flavor = 'sweet';
    let money = 1000;
    return(
        <div>
          {drink && <Taste name = {name} flavor = {flavor} money = {money} />}
        </div>
    );
}

