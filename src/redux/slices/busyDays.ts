import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../axios";
import { TBusyDay } from "../../types/globalTypes";
type TTimeRange = {
  from: string;
  to: string;
};
type TBusyDaysState = {
  items: TBusyDay[];
  isLoading: boolean;
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

const initialState: TBusyDaysState = {
  items: [],
  isLoading: true,
};

const busyDaysSlice = createSlice({
  name: "busyDays",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetBusyDays.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchGetBusyDays.fulfilled,
        (state, action: PayloadAction<TBusyDay[]>) => {
          state.isLoading = false;
          state.items = action.payload;
        }
      );
  },
});

export const busyDaysReducer = busyDaysSlice.reducer;
