import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos
    ? JSON.parse(storedTodos)
    : [{ id: 1, text: "hello", completed: false }];
};

const initialState = {
  todos: loadFromLocalStorage(),
};

const saveToLocalStorage = (state) => {
  localStorage.setItem("todos", JSON.stringify(state.todos));
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
      saveToLocalStorage(state);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveToLocalStorage(state);
    },
    editTodo: (state, action) => {
      // Corrected action name
      const { id, newText } = action.payload; // Corrected payload property name
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = newText; // Corrected payload property name
      }
      saveToLocalStorage(state);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) existingTodo.completed = !existingTodo.completed;
      saveToLocalStorage(state);
    },
    filterTodo: (state) => {
      state.todos = state.todos.filter((todo) => todo.completed !== true);
      saveToLocalStorage(state);
    },
  },
});

export const { addTodo, removeTodo, editTodo, toggleTodo, filterTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
