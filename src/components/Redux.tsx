import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  title: string;
  done: boolean;
  content: string;
}

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, title: "learn React", done: false, content: "make app" },
    { id: 2, title: "make food", done: false, content: "piemontaise" },
    { id: 3, title: "do sport", done: true, content: "running" },
  ],
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string; content: string }>) => {
      const newTodo: Todo = {
        id: Date.now(),
        title: action.payload.title,
        done: false,
        content: action.payload.content,
      };
      state.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;


export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})