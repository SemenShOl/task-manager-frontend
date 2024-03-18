import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import type { PayloadAction } from "@reduxjs/toolkit";

type TStudyScheduleParamsForBackend = {
  groupName: string;
  activeDate: string;
};

type TStudyGroups = {
  id: string;
  name: string;
};
export const fetchStudyScheduleByDate = createAsyncThunk(
  "study/fetchStudySchedule",
  async (groupAndData: TStudyScheduleParamsForBackend): Promise<TLesson[]> => {
    const { data } = await axios.get<TLesson[]>(
      `http://localhost:3001/study/schedule`,
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

export const fetchStudyGroups = createAsyncThunk(
  "study/fetchStudyGroups",
  async (): Promise<TStudyGroups[]> => {
    const { data } = await axios.get<TStudyGroups[]>(
      `http://localhost:3001/study/groups`
    );

    return data;
  }
);

export const fetchStudyWholeSchedule = createAsyncThunk(
  "study/fetchStudyWholeSchedule",
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
  studyScheduleWhole: boolean[];
  groups: TStudyGroups[];
} = {
  isLoading: true,
  studyScheduleDay: [],
  studyScheduleWhole: [],
  groups: [],
};

const studySlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudyScheduleByDate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchStudyScheduleByDate.fulfilled,
        (state, action: PayloadAction<TLesson[]>) => {
          state.isLoading = false;
          state.studyScheduleDay = action.payload;
        }
      )
      .addCase(fetchStudyGroups.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStudyGroups.fulfilled, (state, action) => {
        state.isLoading = false;
        state.groups = action.payload.sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
      })
      .addCase(fetchStudyWholeSchedule.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchStudyWholeSchedule.fulfilled,
        (state, action: PayloadAction<boolean[]>) => {
          state.isLoading = false;
          state.studyScheduleWhole = action.payload;
        }
      );
  },
});

// export const { changeGroup } = studySlice.actions;
//
export const studyReducer = studySlice.reducer;
