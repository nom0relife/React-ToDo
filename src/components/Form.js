import React from "react";

export default function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
}) {
  const textHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    } else {
      console.log("error");
    }
  };

  return (
    <form className="input">
      <input
        onChange={textHandler}
        value={inputText}
        type="text"
        name=""
        id=""
      />
      <button onClick={submitHandler} className="btn">
        <i className="fas fa-arrow-circle-right"></i>
      </button>
    </form>
  );
}
