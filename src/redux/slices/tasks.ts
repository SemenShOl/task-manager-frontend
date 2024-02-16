import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { TBusyDay } from "../../utilites/priorityUtilites";
import type { PayloadAction } from "@reduxjs/toolkit";

type TTimeRange = {
  from: string;
  to: string;
};

export const fetchGetBusyDays = createAsyncThunk(
  "tasks/fetchGetDays",
  async (timeRange: TTimeRange): Promise<TBusyDay[]> => {
    const { data } = await axios.get<TBusyDay[]>("/calendar", {
      params: {
        from: timeRange.from,
        to: timeRange.to,
      },
    });
    return data;
  }
);
export type TNewTask = {
  user_id: number;
  title: string;
  description: string;
  deadline: string;
  priority: "low" | "medium" | "high";
};
export type TTask = {
  id: number;
  user_id: number;
  title: string;
  description: string;
  deadline: string;
  date_of_creation: string;
  is_completed: boolean;
  priority: "low" | "medium" | "high";
};

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
type TBusyDaysState = {
  items: TBusyDay[];
  isLoading: boolean;
};

const initialState = {
  tasks: {
    items: [],
    isLoading: true,
  } as TTasksState,
  busyDays: {
    items: [],
    isLoading: true,
  } as TBusyDaysState,
  taskDateInfo: {
    activeDate: "2023-02-28",
    priorityList: [3, 1, 2],
  },
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addUpdatedTaskToStore(state, action: PayloadAction<TTask>) {
      debugger;
      let updatedTaskIndex = 0;
      state.tasks.items = state.tasks.items.filter((task, index) => {
        if (task.id === action.payload.id) {
          updatedTaskIndex = index;
          return false;
        }
        return true;
      });
      state.tasks.items.splice(updatedTaskIndex, 0, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetBusyDays.pending, (state) => {
        state.busyDays.isLoading = true;
      })
      .addCase(
        fetchGetBusyDays.fulfilled,
        (state, action: PayloadAction<TBusyDay[]>) => {
          state.busyDays.isLoading = false;
          state.busyDays.items = action.payload;
        }
      )
      .addCase(fetchGetTasksForDeadline.pending, (state) => {
        state.tasks.isLoading = true;
      })
      .addCase(
        fetchGetTasksForDeadline.fulfilled,
        (state, action: PayloadAction<TTask[]>) => {
          state.tasks.isLoading = false;
          state.tasks.items = action.payload;
        }
      )
      .addCase(fetchDeleteTask.pending, (state) => {
        state.tasks.isLoading = true;
      })
      .addCase(
        fetchDeleteTask.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.tasks.isLoading = false;
          state.tasks.items = state.tasks.items.filter(
            (task) => task.id !== action.payload
          );
          console.log(state.tasks.items);
        }
      )
      .addCase(fetchAddTask.pending, (state) => {
        state.tasks.isLoading = true;
      })
      /**TODO */
      .addCase(fetchAddTask.fulfilled, (state, action) => {
        state.tasks.isLoading = true;
        state.tasks.items = action.payload;
      })
      .addCase(fetchToggleTask.pending, (state) => {
        state.tasks.isLoading = true;
      })
      .addCase(
        fetchToggleTask.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.tasks.isLoading = true;
          const taskToBeToggled = state.tasks.items.find(
            (task) => task.id === action.payload
          );
          if (taskToBeToggled)
            taskToBeToggled.is_completed = !taskToBeToggled.is_completed;
        }
      )
      .addCase(fetchChangeTask.pending, (state) => {
        state.tasks.isLoading = true;
      })
      .addCase(fetchChangeTask.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
      });
  },
});

export const { addUpdatedTaskToStore } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;

// const slice = createSlice({
//   name: "test",
//   initialState: 0,
//   reducers: {
//     increment: (state, action: PayloadAction<number>) => state + action.payload,
//   },
// });
// // now available:
// slice.actions.increment(2);
// // also available:
// slice.caseReducers.increment(0, { type: "increment", payload: 5 });
