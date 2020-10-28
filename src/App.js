import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);
  const [changeClass, setChangeClass] = useState(false);
  const [crossClass, setCrossClass] = useState(false);

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
          <i
            onClick={() => {
              setCrossClass(!crossClass);
            }}
            className={
              crossClass === false
                ? "fas fa-plus-circle noCross"
                : "fas fa-plus-circle cross"
            }
          ></i>
        </div>
        <div className={crossClass === false ? "form-icons" : "no-form-icons"}>
          <i className="fas fa-calendar-alt"></i>
          <i className="far fa-check-circle"></i>
        </div>
        <div className={crossClass === false ? "noInputForm" : "input-form"}>
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
