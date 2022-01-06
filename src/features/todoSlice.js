import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  checked: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveToDo: (state, action) => {
      state.todoList.push(action.payload);
    },
    saveCheck: (state, action) => {
      state.todoList.map((it) => {
        if (it.id === action.payload) {
          if (it.done === true) {
            it.done = false;
          } else {
            it.done = true;
          }
        }
      });
    },
  },
});

export const { saveToDo, saveCheck } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
