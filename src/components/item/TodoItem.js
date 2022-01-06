import React from "react";
import "../item/TodoItem.css";
import { Checkbox } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { saveCheck } from "../../features/todoSlice";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(saveCheck(item.id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        checked={item.done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "controlled" }}
      />

      {item.done ? (
        <p className="todoItem--done">{item.name}</p>
      ) : (
        <p>{item.name}</p>
      )}
    </div>
  );
};

export default TodoItem;
