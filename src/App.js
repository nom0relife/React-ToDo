import React, { useState } from "react";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  return (
    <div className="App">
      <header>
        <h2>Do Things</h2>
      </header>
      <Navigation todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={todos} setTodos={setTodos} dones={dones} setDones={setDones} />
    </div>
  );
}

export default App;
