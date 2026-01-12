import React,{useEffect, useState} from 'react'

const Todo = () => {
const[task,setTask] = useState("");
const[todos,setTodos] = useState([]);

function handleCahnge(e){
  setTask(e.target.value)
//   console.log(task)
}

function addTodo(){
    setTodos([...todos,task])
setTask("")
    // console.log(todos)
}

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
useEffect(()=>{
  const saveTodos = JSON.parse(localStorage.getItem("todos"))
  if(saveTodos){
    setTodos(saveTodos)
  }

  console.log(saveTodos)
},[])



  return (
    <div>
      <h1>Todo App</h1>

      <input type="text" value={task} onChange={handleCahnge} />
      <button onClick={addTodo}>Add Todo</button>

      <br /><br />

      {todos.map((todo,index)=>(
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
}

export default Todo