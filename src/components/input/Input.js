import React, { useState } from "react";
import "../input/Input.css";
import { useDispatch } from "react-redux";
import { saveToDo } from "../../features/todoSlice";

const Input = () => {
  const dispatch = useDispatch();
  const addToDo = () => {
    console.log(todo);
    dispatch(
      saveToDo({
        item: todo,
        done: false,
        id: Date.now(),
      })
    );
  };
  const [todo, setTodo] = useState("");

  return (
    <div className="input">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addToDo}>Add</button>
    </div>
  );
};

export default Input;
