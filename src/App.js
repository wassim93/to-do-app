import React from "react";
import "./App.css";
import Input from "./components/input/Input";
import TodoItem from "./components/item/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="App">
      <div className="app_container">
        <div className="app_todo_container">
          {todoList.map((it) => (
            <TodoItem key={it.id} item={it} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
