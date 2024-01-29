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

export const fetchGetTasksForDeadline = createAsyncThunk(
  "tasks/fetchGetTasksForDeadline",
  async (deadline) => {
    const { data } = await axios.get(`/calendar/${deadline}`);
    return data;
  }
);

export const fetchDeleteTask = createAsyncThunk(
  "tasks/fetchDeleteTask",
  async (id) => {
    await axios.delete(`/calendar/${id}`);
    return id;
  }
);
export const fetchToggleTask = createAsyncThunk(
  "tasks/fetchToggleTask",
  async (id) => {
    await axios.put(`/calendar/${id}`);
    return id;
  }
);

export const fetchAddTask = createAsyncThunk(
  "tasks/fetchAddTask",
  async (newTask) => {
    const { data } = await axios.post(`/calendar`, newTask);
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
      })
      .addCase(fetchGetTasksForDeadline.pending, (state) => {
        state.tasks.isLoading = true;
      })
      .addCase(fetchGetTasksForDeadline.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.items = action.payload;
      })
      .addCase(fetchDeleteTask.pending, (state) => {
        state.tasks.isLoading = true;
      })
      .addCase(fetchDeleteTask.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.items = state.tasks.items.filter(
          (task) => task.id !== action.payload
        );
        console.log(state.tasks.items);
      })
      .addCase(fetchAddTask.pending, (state) => {
        state.tasks.isLoading = true;
      })
      .addCase(fetchAddTask.fulfilled, (state, action) => {
        state.tasks.isLoading = true;
        state.tasks.items = action.payload;
      })
      .addCase(fetchToggleTask.pending, (state) => {
        state.tasks.isLoading = true;
      })
      .addCase(fetchToggleTask.fulfilled, (state, action) => {
        state.tasks.isLoading = true;
        const taskToBeToggled = state.tasks.items.find(
          (task) => task.id === action.payload
        );
        taskToBeToggled.is_completed = !taskToBeToggled.is_completed;
        console.log(taskToBeToggled);
      });
  },
});

// export const { getBusyDays } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
