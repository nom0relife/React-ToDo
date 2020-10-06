import React, { useState } from "react";
import Navigation from "./components/Navigation";
import TodoList from './components/TodoList';
import "./App.css";

function App() {

  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <Navigation todo={todo} />
      <TodoList />
    </div>
  );
}

export default App;
