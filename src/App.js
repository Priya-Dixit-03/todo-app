//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
var count=1
function App(){
  var [todo,setTodo]=useState([])
  const addTodo=()=>{
    console.log("Add todo")
   const todoText= document.getElementById('todoInput').value
   let todoObject={
    id:count++,
    title:todoText
   }
   console.log(todoText)
   todo.push(todoObject)
  // setTodo([...todo])
    
  }
  console.log("length of todo",todo.length)
  const deleteTodo=(id)=>{
     console.log("Delete Todo is Called:",id)
     todo=todo.filter(todoTemp=>
      {
        if(id===todoTemp.id){
      return false
        }
        else{
          return  true
        }
      })
      setTodo([...todo])
  }

  return (
   
    <div>
      <h1>Todo App</h1>
      <input id="todoInput" type='text' placeholder='Add your todo here'></input>
      <button onClick={addTodo}>Add</button>
      {todo.map(todoTemp=>
        {
          return <div>
            {todoTemp.title}
            <button onClick={()=>deleteTodo(todoTemp.id)}>Delete</button>
            </div>
        })}


    </div>

  );
}

export default App;


