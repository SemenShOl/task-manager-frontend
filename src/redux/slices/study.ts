import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

type TStudyScheduleParamsForBackend = {
  groupName: string;
  activeDate: string;
};

type TStudyGroups = {
  id: string;
  name: string;
};
export const fetchStudySchedule = createAsyncThunk(
  "study/fetchStudySchedule",
  async (
    groupAndData: TStudyScheduleParamsForBackend
  ): Promise<TStudySchedule[]> => {
    const { data } = await axios.get<TStudySchedule[]>(
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
  groups: TStudyGroups[];
  chosenGroup: TStudyGroups | undefined;
} = {
  isLoading: true,
  studySchedule: [],
  groups: [],
  chosenGroup: { id: "1243", name: "ПИН-36" },
};

const studySlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    changeGroup(state, action: PayloadAction<string>) {
      state.chosenGroup = state.groups.find(
        (group) => group.name === action.payload
      );
    },
  },
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
      )
      .addCase(fetchStudyGroups.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStudyGroups.fulfilled, (state, action) => {
        state.isLoading = false;
        state.groups = action.payload.sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
      });
  },
});

export const { changeGroup } = studySlice.actions;

export const studyReducer = studySlice.reducer;
