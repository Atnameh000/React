

function Button({onClick,children}){
   return(
    <button onClick={e =>{
        e.stopPropagation();
        onClick();
    }}>
        {children}
    </button>
   );
}

function MovieButton({onMovie}){
    return(
        <Button onClick={onMovie}>
            click for playing movie
        </Button>
    );
}

function MusicButton({onMusic}){
    return(
        <Button onClick={onMusic}>
            click for playing movie
        </Button>
    );
}

export default function Display(){
    return(
        <div onClick={() => alert('yo man')}>
            <MovieButton onMovie={() =>
                 alert('opening the movie')
            }>
            </MovieButton>
            <MusicButton onMusic={() =>
                 alert('playing the music')
            }>
            </MusicButton>
        </div>
    );
}