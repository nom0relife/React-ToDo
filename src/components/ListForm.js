import React from "react";

export default function ListForm({
  lists,
  setLists,
  inputListText,
  setInputListText,
}) {
  //form input text
  const textHandler = (e) => {
    // console.log(e.target.value);
    setInputListText(e.target.value);
  };

  // form text handling
  const submitHandler = (e) => {
    e.preventDefault();

    if (inputListText !== "") {
      setLists([
        ...lists,
        {
          text: inputListText,
          id: Math.random() * 1000,
        },
      ]);
      setInputListText("");
      console.log("list added");
      console.log(lists);
    } else {
      // error handling of not giving the right details
      console.log("error");
    }
  };

  return (
    <div>
      <form action="" className="listInput">
        <button onSubmit={submitHandler} className="btn-white">
          <i className="fas fa-plus-circle"> </i>
        </button>
        <input
          onChange={textHandler}
          value={inputListText}
          type="text"
          name=""
          id=""
        />
      </form>
    </div>
  );
}
