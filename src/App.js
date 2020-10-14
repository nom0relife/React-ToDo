import React, { useState } from "react";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState({
    text: inputText,
    completed: false
  });

  return (
    <div className="App">
      <header>
        <h2>Do Things {inputText}</h2>
      </header>
      <Navigation todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
