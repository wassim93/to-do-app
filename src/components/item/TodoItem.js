import React from "react";
import "../item/TodoItem.css";
import { Checkbox } from "@material-ui/core";
const TodoItem = ({ item }) => {
  const handleCheck = () => {};
  return (
    <div className="todoItem">
      <Checkbox
        checked={item.done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "controlled" }}
      />

      <p className={item.done && "todoItem--done"}>{item.name}</p>
    </div>
  );
};

export default TodoItem;
