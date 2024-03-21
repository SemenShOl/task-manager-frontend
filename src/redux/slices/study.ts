import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import type { PayloadAction } from "@reduxjs/toolkit";

type TStudyGroups = {
  id: string;
  name: string;
};
export const fetchGetLessonsForDate = createAsyncThunk(
  "study/fetchGetLessonsForDate",
  async (activeDate: string): Promise<TLesson[]> => {
    const { data } = await axios.get<TLesson[]>(
      `http://localhost:3001/study/schedule`,
      {
        params: {
          groupName: localStorage.getItem("groupName") || "",
          activeDate,
        },
      }
    );

    return data;
  }
);

export const fetchGetStudyGroups = createAsyncThunk(
  "study/fetchGetStudyGroups",
  async (): Promise<TStudyGroups[]> => {
    const { data } = await axios.get<TStudyGroups[]>(
      `http://localhost:3001/study/groups`
    );

    return data;
  }
);

export const fetchGetScheduleForCurrent42Days = createAsyncThunk(
  "study/fetchGetScheduleForCurrent42Days",
  async (from: string): Promise<boolean[]> => {
    const { data } = await axios.get<boolean[]>(
      `http://localhost:3001/study/schedule/all`,
      {
        params: {
          groupName: localStorage.getItem("groupName") || "",
          from,
        },
      }
    );
    return data;
  }
);

export type TLesson = {
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
  studyScheduleDay: TLesson[];
  scheduleForCurrent42Days: boolean[];
  groups: TStudyGroups[];
} = {
  isLoading: true,
  studyScheduleDay: [],
  scheduleForCurrent42Days: [],
  groups: [],
};

const studySlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetLessonsForDate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchGetLessonsForDate.fulfilled,
        (state, action: PayloadAction<TLesson[]>) => {
          state.isLoading = false;
          state.studyScheduleDay = action.payload;
        }
      )
      .addCase(fetchGetStudyGroups.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetStudyGroups.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("что блять");
        console.log(
          "fsdfsdfsdf:",
          action.payload.find((el) => el.name == "ПИН-44")
        );
        state.groups = action.payload.sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
      })
      .addCase(fetchGetScheduleForCurrent42Days.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchGetScheduleForCurrent42Days.fulfilled,
        (state, action: PayloadAction<boolean[]>) => {
          state.isLoading = false;
          state.scheduleForCurrent42Days = action.payload;
        }
      );
  },
});

// export const { changeGroup } = studySlice.actions;
//
export const studyReducer = studySlice.reducer;
