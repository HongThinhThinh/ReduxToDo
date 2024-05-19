import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice,
  },
});

export default store;
