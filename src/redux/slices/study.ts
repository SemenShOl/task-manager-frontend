import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import type { PayloadAction } from "@reduxjs/toolkit";

type TStudyScheduleParamsForBackend = {
  groupName: string;
  activeDate: string;
};
export const fetchStudySchedule = createAsyncThunk(
  "study/fetchStudySchedule",
  async (
    groupAndData: TStudyScheduleParamsForBackend
  ): Promise<TStudySchedule[]> => {
    const { data } = await axios.get<TStudySchedule[]>(
      `http://localhost:3001/study`,
      {
        params: {
          groupName: groupAndData.groupName,
          activeDate: groupAndData.activeDate,
        },
      }
    );

    return data;
  }
);

export type TStudySchedule = {
  day: number;
  name: string;
  type: "Лаб" | "Лек" | "Пр" | "";
  week: number;
  class?: number;
  teacher: string;
  location: string;
  week_recurrence?: any;
  startOfLesson: string;
};

const initialState: {
  isLoading: boolean;
  studySchedule: TStudySchedule[];
} = {
  isLoading: true,
  studySchedule: [],
};

const userSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudySchedule.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchStudySchedule.fulfilled,
        (state, action: PayloadAction<TStudySchedule[]>) => {
          state.isLoading = false;
          state.studySchedule = action.payload;
        }
      );
  },
});

export const studyReducer = userSlice.reducer;
