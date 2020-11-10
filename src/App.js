import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  // const [lists, setLists] = useState([]);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);
  const [changeClass, setChangeClass] = useState(false);
  const [crossClass, setCrossClass] = useState(false);

  // run once and get existing todos and dones
  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }

    if (localStorage.getItem("dones") === null) {
      localStorage.setItem("dones", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("dones"));
      setDones(todoLocal);
    }
  }, []);

  // save to local
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("dones", JSON.stringify(dones));
  }, [todos, dones]);

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
        <div className={changeClass === false ? "sideBar" : "sideBar-show"}>
          <button href="New list">New list</button>
          <button href="">My lists</button>
          <button href="">About</button>
        </div>
        <div className="title">
          <h2>Things</h2>
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
