import React from "react";
import Todo from "./Todo";
import Done from "./Done";

export default function TodoList({ todos, setTodos, dones, setDones }) {
  return (
    <div className="container-fluid">
      <div className="col-12 text-center mt-2 ">
        <div className="menu">
          <i className="fas fa-calendar-alt"></i>
          <h3>To Do</h3>
        </div>
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              todos={todos}
              setTodos={setTodos}
              todo={todo}
              setDones={setDones}
              dones={dones}
            />
          ))}
        </ul>
      </div>
      <div className="col-12 text-center mt-2 ">
        <div className="menu">
          <i className="fas fa-check"></i>
          <h3>Done</h3>
        </div>
        <ul className="todo-list">
          {dones.map((done) => (
            <Done
              dones={dones}
              done={done}
              key={done.id}
              setDones={setDones}
              text={done.text}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
