import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPriorityList } from "../../utilites/priorityUtilites";
import { TMomentDay } from "../../types/globalTypes";
import moment from "moment";

type TChosenDayInfo = {
  activeDate: string;
  priorityList: TPriorityList;
};

const initialState: TChosenDayInfo = {
  activeDate: "",
  priorityList: {
    low: 0,
    medium: 1,
    high: 2,
  },
};

const chosenDayInfoSlice = createSlice({
  name: "chosenDayInfo",
  initialState,
  reducers: {
    changeChosesDayInfo(state, action: PayloadAction<TChosenDayInfo>) {
      state.activeDate = action.payload.activeDate;
      state.priorityList = action.payload.priorityList;
    },
  },
});
export const { changeChosesDayInfo } = chosenDayInfoSlice.actions;
export const chosenDayInfoReducer = chosenDayInfoSlice.reducer;
