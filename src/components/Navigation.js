import React from "react";

export default function Navigation({ inputText, setInputText, todos, setTodos }) {

  const textHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  // const addHandler = (e) => {
  //   const targetValue = textHandler(e);
  //   console.log(targetValue);
  // }


  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }])
  }


  return (
    <form className="input-form">
      <div className="text-container">
        <input onChange={textHandler} type="text" name="" id="" />
        <button onClick={submitHandler} className="btn btn-secondary">+</button>
      </div>
    </form>
  );
}
