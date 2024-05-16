
export default function Print(){
    function handleOnSumbit(){
        alert('hemanta')
    }

    return(
        <form onSubmit={e => {
              e.preventDefault();
              handleOnSumbit()
        }}>
               <input />
               <button >sumbit</button>
        </form>
    );
}