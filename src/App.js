import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  const burger = () => {
    //toggle class
  };

  return (
    <div className="App">
      <header onClick={burger} className="navbar">
        <div className="burger">
          <div className="span1"></div>
          <div className="span2"></div>
          <div className="span3"></div>
        </div>
        <div className="title">
          <h2>Things</h2>
        </div>
        <div className="menu">
          <i class="fas fa-calendar-alt"></i>
          <h3>To Do</h3>
        </div>
      </header>
      <Form
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        dones={dones}
        setDones={setDones}
      />
    </div>
  );
}

export default App;
