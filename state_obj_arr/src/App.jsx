import { useState } from "react";
import Add from './add'
import Show from './show'
//import './App.css'

// const todos = [{
//   id: 0,
//   title: 'hello'
// }]

let id = 1;

function App() {
  const [todolist, setTodolist] = useState([])

  function handleOnClickDelete(todoId){
    setTodolist(todolist.filter(todo => 
         todo.id !== todoId
      ))
  }

  function handleOnChange(todo,title){
    setTodolist(todolist.map(t =>{ 
      if(t.id === todo.id){
        return {
          ...t,
          title: title
        }
      }
      return t
    }))
  }

  function handleOnClickAdd(title){
    setTodolist([
      ...todolist,
      {id: id++, title: title}
    ])
  }

  return (
    <>
      <h1><b><i>TODO  LIST</i></b></h1>
      <div>
      <Add 
       handleOnClickAdd = {handleOnClickAdd}
      />
      </div>
      {todolist.map(todo => 
          <Show 
          todo= {todo}
          handleOnChange = {handleOnChange}
          handleOnClickDelete = {handleOnClickDelete}
          />
        )}
    </>
  )
}

export default App
