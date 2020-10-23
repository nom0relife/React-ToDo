import React from "react";
// import trash from "../images/trash.png";

export default function Todo({ text, todo, todos, setTodos }) {
  const deleteHandler = (e) => {
    setTodos(todos.filter((element) => element.id !== todo.id));
    // console.log(todo);
  };

  return (
    <div className="todo-container">
      <li>
        <div className="text">{text}</div>
        <button className="button1">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="button2">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </div>
  );
}
