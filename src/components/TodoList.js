import React from "react";
import Todo from "./Todo";

export default function TodoList() {
  return (
    <div className="container-fluid d-flex full-height">
      <div className="col-6 text-center mt-2 right-line">
        <h3 className="white-text">Todos</h3>
        <Todo />
      </div>
      <div className="col-6 text-center mt-2 left-line">
        <h3 className="white-text">Done Todos</h3>
      </div>
    </div>
  );
}
