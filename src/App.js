import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ListForm from "./components/ListForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [lists, setLists] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [inputListText, setInputListText] = useState("");
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);
  const [changeClass, setChangeClass] = useState(false);
  const [crossClass, setCrossClass] = useState(false);
  const [drop, setDrop] = useState(false);

  // console.log(lists);
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
          className={changeClass === false ? "burger ham" : "burger noHam"}
        >
          <div className="span1"></div>
          <div className="span2"></div>
          <div className="span3"></div>
        </div>
        <div className={changeClass === false ? "sideBar-show" : "sideBar"}>
          <h1>Things</h1>
          <div className="button-container">
            <button
              onClick={() => {
                setDrop(!drop);
              }}
            >
              New list
            </button>
            <div className={drop === false ? "dropdown1-hide" : "dropdown1"}>
              <ListForm
                lists={lists}
                setLists={setLists}
                inputListText={inputListText}
                setInputListText={setInputListText}
                todos={todos}
                setTodos={setTodos}
                dones={dones}
                setDones={setDones}
                crossClass={crossClass}
                changeClass={changeClass}
                setChangeClass={setChangeClass}
                setCrossClass={setCrossClass}
                currentList={currentList}
                setCurrentList={setCurrentList}
              />
            </div>
          </div>
          <button href="">My lists</button>
          <button href="">About</button>
        </div>
        <div className="title">
          <h2>Things</h2>
          <h3>{currentList}</h3>
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
