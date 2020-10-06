import React from "react";

export default function Navigation({ inputText, setInputText }) {

  const textHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.targetValue);
  }
  // const addHandler = (e) => {
  //   const targetValue = textHandler(e);
  //   console.log(targetValue);
  // }



  return (
    <form className="input-form">
      <div className="text-container">
        <input onChange={textHandler} type="text" name="" id="" />
        <button className="btn btn-secondary">+</button>
      </div>
    </form>
  );
}
