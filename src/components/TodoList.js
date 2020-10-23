import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos }) {
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
            />
          ))}
        </ul>
      </div>
      <div className="col-6 text-center mt-2 left-line">
        <h3 className="white-text">Done Todos</h3>
      </div>
    </div>
  );
}
