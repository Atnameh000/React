// function AnotherProfile({name,age,gamil,faculty,address}){
//     return(
//         <div>
//             <h1>{name}</h1>
//             <h1>{age}</h1>
//             <h1>{gamil}</h1>
//             <h1>{faculty}</h1>
//             <h1>{address}</h1>
//         </div>
//     );
// }

function AnotherProfile({ children }){
    return(
        <div style={{
            marginLeft : '25%',
            height : '300',
            width : 600,
            backgroundColor : 'black',
            color : 'white',
            display : 'flex',
            alignContent : 'center',
            alignItems : 'center'
            }}>
            {children}
        </div>
    );
}


// function Profile({name,age,gamil,faculty,address}){
function Profile({person}){
    return(
        <div>
            <h1>{person.personal.name}</h1>
            <h1>{person.personal.age}</h1>
            <h1>{person.gamil}</h1>
            <h1>{person.faculty}</h1>
            <h1>{person.personal.address}</h1>
            {/* <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{gamil}</h1>
            <h1>{faculty}</h1>
            <h1>{address}</h1> */}
            {/* <AnotherProfile 
             name = 'hemanta'
             age = '20'
             gamil = 'hemantaneupane76@gamil'
             faculty = 'Bsc.Csit'
             address = 'palungtar-6,Gorkha'
            /> */}
        </div>
    );
}


export default function Gallery(){
    return(
    <div>
        <h1>Hello There</h1>
        {/* <Profile 
          name = 'hemanta'
          age = '20'
          gamil = 'hemantaneupane76@gamil'
          faculty = 'Bsc.Csit'
          address = 'palungtar-6,Gorkha'
        /> */}
        <Profile person = {{
            personal : {
                name : 'hemanta',
                age : '20',
                address : 'palungtar-6,Gorkha'
            },
            gamil : 'hemantaneupane76@gamil',
            faculty : 'Bsc.Csit',
        }}
        />
        {/* <AnotherProfile>
            <Profile 
            name = 'hemanta'
            age = '20'
            gamil = 'hemantaneupane76@gamil'
            faculty = 'Bsc.Csit'
            address = 'palungtar-6,Gorkha'
            />
        </AnotherProfile> */}
        <AnotherProfile>
            <Profile person = {{
                personal : {
                    name : 'hemanta',
                    age : '20',
                    address : 'palungtar-6,Gorkha'
                },
                gamil : 'hemantaneupane76@gamil',
                faculty : 'Bsc.Csit',
            }}
            />
        </AnotherProfile>
    </div>
    );
}