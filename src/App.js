import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);
  const [changeClass, setChangeClass] = useState(false);

  // const burger = () => {
  //   //toggle class
  // };

  return (
    <div className="App">
      <div className="navbar ">
        <div
          onClick={() => setChangeClass(!changeClass)}
          className={changeClass === false ? "burger noHam" : "burger ham"}
        >
          <div className="span1"></div>
          <div className="span2"></div>
          <div className="span3"></div>
        </div>
        <div className="title">
          <h2>Things</h2>
        </div>
        <div className="menu">
          <i className="fas fa-calendar-alt"></i>
          <h3>To Do</h3>
        </div>
      </div>

      <div className="list">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          dones={dones}
          setDones={setDones}
        />
      </div>

      <div className="todoNav">
        <div className="form-menu">
          <i class="fas fa-plus-circle"></i>
        </div>
        <div className="form-icons">
          <i class="fas fa-calendar-alt"></i>
          <i class="far fa-check-circle"></i>
        </div>
        <div className="form">
          <Form
            todos={todos}
            inputText={inputText}
            setTodos={setTodos}
            setInputText={setInputText}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
