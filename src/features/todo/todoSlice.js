import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodos: (state, action) => {
      const { id, newtext } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) existingTodo.text = newtext;
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) existingTodo.complated = !existingTodo.complated;
    },
  },
});

export const { addTodo, removeTodo, editTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
