import React from "react";

export default function Done({
  text,
  todo,
  todos,
  setTodos,
  done,
  dones,
  setDones,
}) {
  const deleteHandler = () => {
    setDones(dones.filter((element) => element.id !== done.id));
  };

  const redoHandler = () => {
    setTodos([...todos, { text, completed: false, id: Math.random() * 1000 }]);
    setDones(dones.filter((element) => element.id !== done.id));
  };

  return (
    <div className="done-container">
      <li>
        <button onClick={redoHandler} className="button1">
          <div className="circle">
            <div className="tick1"></div>
            <div className="tick2"></div>
          </div>
        </button>
        <div className="done-text">{text}</div>
        {/* <button onClick={deleteHandler} className="button2">
                    <i className="fas fa-trash"></i>
                </button> */}
      </li>
    </div>
  );
}
