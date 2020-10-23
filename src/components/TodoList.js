import React from "react";
import Todo from "./Todo";
import Done from "./Done";

export default function TodoList({ todos, setTodos, dones, setDones }) {
  return (
    <div className="container-fluid d-flex full-height">
      <div className="col-6 text-center mt-2 right-line">
        <h3 className="white-text">Todos</h3>
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
      <div className="col-6 text-center mt-2 left-line">
        <h3 className="white-text">Done Todos</h3>
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
