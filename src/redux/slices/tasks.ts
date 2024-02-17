import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TMomentDay, TNewTask, TTask } from "../../types/globalTypes";

export const fetchGetTasksForDeadline = createAsyncThunk(
  "tasks/fetchGetTasksForDeadline",
  async (deadline: string): Promise<TTask[]> => {
    const { data } = await axios.get<TTask[]>(`/calendar/${deadline}`);
    return data;
  }
);

export const fetchDeleteTask = createAsyncThunk(
  "tasks/fetchDeleteTask",
  async (id: number): Promise<number> => {
    await axios.delete(`/calendar/${id}`);
    return id;
  }
);
export const fetchToggleTask = createAsyncThunk(
  "tasks/fetchToggleTask",
  async (id: number): Promise<number> => {
    await axios.put(`/calendar/${id}`);
    return id;
  }
);

export const fetchAddTask = createAsyncThunk(
  "tasks/fetchAddTask",
  async (newTask: TNewTask): Promise<TTask[]> => {
    const { data } = await axios.post<TTask[]>(`/calendar`, newTask);
    return data;
  }
);

export const fetchChangeTask = createAsyncThunk(
  "tasks/fetchChangeTask",
  async (updatedTask: TTask): Promise<number | undefined> => {
    console.log("id: ", updatedTask.id);
    console.log("updatedTask: ", updatedTask);
    await axios.put(`/calendar/task/${updatedTask.id}`, updatedTask);
    return updatedTask.id;
  }
);

type TTasksState = {
  items: TTask[];
  isLoading: boolean;
};

const initialState: TTasksState = {
  items: [],
  isLoading: true,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addUpdatedTaskToStore(state, action: PayloadAction<TTask>) {
      let updatedTaskIndex = 0;
      state.items = state.items.filter((task, index) => {
        if (task.id === action.payload.id) {
          updatedTaskIndex = index;
          return false;
        }
        return true;
      });
      state.items.splice(updatedTaskIndex, 0, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetTasksForDeadline.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchGetTasksForDeadline.fulfilled,
        (state, action: PayloadAction<TTask[]>) => {
          state.isLoading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchDeleteTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchDeleteTask.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.isLoading = false;
          state.items = state.items.filter(
            (task) => task.id !== action.payload
          );
          console.log(state.items);
        }
      )
      .addCase(fetchAddTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAddTask.fulfilled, (state, action) => {
        state.isLoading = true;
        state.items = action.payload;
      })
      .addCase(fetchToggleTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchToggleTask.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.isLoading = true;
          const taskToBeToggled = state.items.find(
            (task) => task.id === action.payload
          );
          if (taskToBeToggled)
            taskToBeToggled.is_completed = !taskToBeToggled.is_completed;
        }
      )
      .addCase(fetchChangeTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchChangeTask.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { addUpdatedTaskToStore } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
