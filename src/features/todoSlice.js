import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveToDo: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { saveToDo } = todoSlice.actions;
export default todoSlice.reducer;
