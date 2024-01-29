import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
export const fetchGetBusyDays = createAsyncThunk(
  "tasks/fetchGetDays",
  async (timeRange) => {
    const { data } = await axios.get("/calendar", {
      params: {
        from: timeRange.from,
        to: timeRange.to,
      },
    });
    return data;
  }
);
const initialState = {
  tasks: {
    items: [],
    isLoading: true,
  },
  busyDays: {
    items: [],
    isLoading: true,
  },
};

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchGetBusyDays.pending]: (state) => {
//       state.busyDays.status = "loading";
//       state.busyDays.items = [];
//     },
//     [fetchGetBusyDays.fulfielld]: (state, action) => {
//       state.busyDays.status = "loaded";
//       state.busyDays.items = action.payload;
//     },
//   },
// });

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: (create) => ({
//     getBusyDays: create.asyncThunk(
//       async (timeRange) => {
//         const { data } = await axios.get("/calendar", {
//           params: {
//             from: timeRange.from,
//             to: timeRange.to,
//           },
//         });
//         return data;
//       },
//       {
//         pending: (state) => {
//           state.busyDays.loading = true;
//         },
//         rejected: (state, action) => {
//           state.busyDays.loading = false;
//         },
//         fulfilled: (state, action) => {
//           state.busyDays.loading = false;
//           state.busyDays.items = action.payload;
//         },
//       }
//     ),
//   }),
// });

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetBusyDays.pending, (state) => {
        state.busyDays.isLoading = true;
      })
      .addCase(fetchGetBusyDays.fulfilled, (state, action) => {
        state.busyDays.isLoading = false;
        state.busyDays.items = action.payload;
      });
  },
});

// export const { getBusyDays } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
