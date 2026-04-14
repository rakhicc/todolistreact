import { useState } from 'react';
import './App.css'
import TodoTable from './toDoTable';

function App() {
  const [todo, setTodo] =useState({description:'',date:''})
  const [todos, setTodos] =useState([])
  const changehandler =(event)=>{
    setTodo({...todo,[event.target.name]:event.target.value})
  }
  const addTodo=()=>{
    setTodos([...todos, todo])
    setTodo({description: '', date: ''}); // Clear todo
  }
  const deleteTodo = (row) => {
    setTodos(todos.filter((todo,index)=>index!==row))
    alert('Delete row: ' + row);
  }

  return (
    <>
      <input placeholder="Description" name="description" value={todo.description} onChange={changehandler} />
      <input placeholder="Date" name="date" value={todo.date} onChange={changehandler}/>
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo}></TodoTable>
    </>
  )
}

export default App
