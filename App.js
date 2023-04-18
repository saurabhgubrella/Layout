// import logo from './logo.svg';
import React,{useState , useCallback} from 'react';
import './App.css';
import Details from './Details';


function App() {
const [todos, setTodos] = useState([]);
const [addDetails, setAddDetails] = useState(0);
const increment = ()=>{
  setAddDetails((i)=>i+1);
}
const AddTodo= useCallback(()=>{
  setTodos((t) => [...t, "New Todo"])
},[todos])
  return (
    <div className="App">
      <Details todos={todos} AddTodo={AddTodo}/>
      <div>
      <p>counter {addDetails}</p>
      <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default App;
