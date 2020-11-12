import React from "react";

export default function ListForm({
  lists,
  setLists,
  inputListText,
  setInputListText,
  todos,
  setTodos,
  dones,
  setDones,
  crossClass,
  setCrossClass,
  changeClass,
  setChangeClass,
  currentList,
  setCurrentList,
}) {
  //form input text
  const textHandler = (e) => {
    setInputListText(e.target.value);
  };

  // form text handling
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(lists);
    // console.log(todos);

    if (inputListText !== "") {
      setLists([
        ...lists,
        {
          listName: inputListText,
          id: Math.random() * 1000,
          todos: [],
          dones: [],
        },
      ]);
      console.log(lists);
      // setCurrentList(this.lists.listName);
      setChangeClass(!changeClass);
      setCrossClass(!crossClass);
      setInputListText("");
    } else {
      // error handling of not giving the right details
      console.log("error");
    }
  };

  return (
    <div>
      <form action="" className="listInput">
        <button onClick={submitHandler} className="btn-white">
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
