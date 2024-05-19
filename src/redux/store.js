import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import counterSlice from "./counterSlice";
import toDoSlice from "./toDoSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    todos: toDoSlice,
  },
});

export default store;
