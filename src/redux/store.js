import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./slices/tasks";

const store = configureStore({
  reducer: { tasks: tasksReducer },
});

export default store;
