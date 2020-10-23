import React from "react";

// import trash from "../images/trash.png";

export default function Todo({ text, todo, todos, setTodos, dones, setDones }) {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
    // console.log(todo);
  };

  const checkHandler = () => {
    setTodos(
      todos.filter((element) => {
        if (element.id === todo.id) {
          element.completed = true;
          return setDones([...dones, element]);
        }
        return;
      })
    );
  };

  return (
    <div className="todo-container">
      <li>
        <div className="text">{text}</div>
        <button onClick={checkHandler} className="button1">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="button2">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </div>
  );
}
