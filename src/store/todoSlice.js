import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../mockData";
import nextId from "react-id-generator";

const initialValue = mockData;

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialValue,
  },
  reducers: {
    deleteTodo: (state, action) => {
      state.todos.data = state.todos.data.filter((item) => {
        return item.id !== action.payload;
      });
    },
    addTodo: (state, action) => {
      const newTodo = { id: nextId(), ...action.payload };
      state.todos = { data: [...state.todos.data, newTodo] };
    },
    editTodo: (state, action) => {
      state.todos.data = state.todos.data.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
    },
    checklistTodo: (state, action) => {
      state.todos.data = state.todos.data.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    }
  },
});

export const { deleteTodo, addTodo, editTodo ,checklistTodo} = todoSlice.actions;
export default todoSlice.reducer;
