//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
var count=1
function App(){
  var [todo,setTodo]=useState([])
  const addTodo=()=>{
    console.log("Add todo")
   const todoText= document.getElementById("todoInput").value
   let todoObject={
    id: count++,
    title:todoText
   }
   console.log("todoText:"+todoText)
   todo.push(todoText)
   setTodo([...todo])
   console.log("Length:"+todo.length)


    //todoArray.push()
  }
  // const getDynamicList=()=>{
  //    let response=""
  //    for(let count=0;count<todo.length;count++){
  //     response=<div>{todo{count}}</div>
  //    }
  //    return response
  // }
  const deleteTodo=(id)=>{
     console.log("Delete Todo:",id)
     todo=todo.filter(tempTodo=>{
      if(id===tempTodo.id){
        return false
      }
      else{
        return true
      }
     })
     setTodo([...todo])
  }
  
  return (
   
    <div>
      <h1>Todo App</h1>
      <input  id="todoInput" type="text" placeholder="Add your todo here"></input>
      <button onClick={addTodo}>Add</button>
      {todo.map(tempTodo=>{
        console.log("tempTodo:",tempTodo)
        return <div>
          {tempTodo}
          <button onClick={()=>deleteTodo(tempTodo.id)}>Delete</button>
          </div>
      })}
     

    </div>

  );
}

export default App;
