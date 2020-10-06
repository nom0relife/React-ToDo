import React, { useState } from "react";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <header>
        <h2>Do Things </h2>
      </header>
      <Navigation setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
