import React from "react";
import trash from "../images/trash.png";

export default function Todo() {
  return (
    <div className="todo-container">
      <span>Test</span>
      <button>
        <img src={trash} className="" alt="" />
      </button>
    </div>
  );
}
