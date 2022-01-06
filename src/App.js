import React from "react";
import "./App.css";
import Input from "./components/input/Input";
const todoList = [
  {
    item: "todo1",
    done: false,
    id: Date.now(),
  },
  {
    item: "todo2",
    done: false,
    id: Date.now(),
  },
  {
    item: "todo3",
    done: false,
    id: Date.now(),
  },
  {
    item: "todo4",
    done: true,
    id: Date.now(),
  },
];

function App() {
  return (
    <div className="App">
      <div className="app_container">
        <div className="app_todo_container">
          {todoList.map((it) => (
            <h1>{it.item}</h1>
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
