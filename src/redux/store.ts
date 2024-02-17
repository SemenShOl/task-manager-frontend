import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { tasksReducer } from "./slices/tasks";
import type { TypedUseSelectorHook } from "react-redux";
import { busyDaysReducer } from "./slices/busyDays";
import { chosenDayInfoReducer } from "./slices/chosenDayInfo";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    busyDays: busyDaysReducer,
    chosenDayInfo: chosenDayInfoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
