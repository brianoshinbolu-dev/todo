import React,{useState} from 'react'
import './App.css';

let globalId = 0;

function App() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

    function submitData(e){
      e.preventDefault()
      setTodos(oldTodos => [...oldTodos, {todo: task, id: globalId++}])
      setTask("")
    }

    function deleteItem(id){
      setTodos(oldTodos => oldTodos.filter(item => item.id !== id ))
    }

  return (
    <div className="App">
      <h1>Brian Todo-List</h1>
      <form onSubmit={submitData}>
        <input 
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          />
        <button type='submit'>Add</button>
      </form>
      <ul>
      {todos.map(item => <li key={item.id}>{item.todo} <button onClick={() => deleteItem(item.id)}>Delete</button></li>)}
      </ul>
    </div>
  );
}

export default App;
