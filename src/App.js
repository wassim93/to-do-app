import React from "react";
import "./App.css";
import Input from "./components/input/Input";
import TodoItem from "./components/item/TodoItem";
const todoList = [
  {
    name: "todo1",
    done: false,
    id: Date.now(),
  },
  {
    name: "todo2",
    done: false,
    id: Date.now(),
  },
  {
    name: "todo3",
    done: false,
    id: Date.now(),
  },
  {
    name: "todo4",
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
            <TodoItem item={it} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
