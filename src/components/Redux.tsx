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
    { id: 1, title: "Apprendre Redux", done: false, content: "Créer une application simple avec React, TypeScript et Redux-Toolkit afin d'apprendre à me servir de Redux-Toolkit" },
    { id: 2, title: "Faire les courses", done: false, content: "Fromage, dessert, carottes, pate feuilletée, miel, oeufs, beurre, chou fleur" },
    { id: 3, title: "Progresser en runnig", done: true, content: "Je dois augmenter de 1km par semaine la distance parcouru à chaque sortie" },
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
    toggleTodo: (state, action) => {
      const taskTargeted = state.find((t)=> t.id === action.payload);
      if (taskTargeted) {
        taskTargeted.done = !taskTargeted.done;
      }
    },
    deleteTodo: (state, action) => {
      state = state.filter((t) => t.id !== action.payload)
      return state
    }
  },
});

export const { addTodo, toggleTodo , deleteTodo } = todoSlice.actions;


export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
