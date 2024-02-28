import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import { userInfo } from "os";

const savePasswordAndLogin = (login: string, password: string) => {
  localStorage.setItem("password", password);
  localStorage.setItem("login", login);
};

const deletePasswordAndLogin = () => {
  localStorage.removeItem("password");
  localStorage.removeItem("login");
};
export const fetchUserLogin = createAsyncThunk(
  "user/fetchUserLogin",
  async (
    userInfo: TUser
  ): Promise<{ message: string; status: number; userInfo: TUser }> => {
    try {
      const { data, status } = await axios.post<{ message: string }>(
        `auth/login`,
        userInfo
      );
      const { message } = data;
      return { message, status, userInfo };
    } catch (error) {
      return { message: "Неверный логин или пароль", status: 401, userInfo };
    }
  }
);

export const fetchUserRegistration = createAsyncThunk(
  "user/fetchUserRegistration",
  async (
    userInfo: TUser
  ): Promise<{ message: string; status: number; userInfo: TUser }> => {
    const { data, status } = await axios.post<{ message: string }>(
      `auth/registration`,
      userInfo
    );
    const { message } = data;
    return { message, status, userInfo };
  }
);

export const fetchUserChangeData = createAsyncThunk(
  "user/fetchUserChangeData",
  async (userInfo: TUser): Promise<TUser> => {
    await axios.put(`auth/new_data`, userInfo);
    return userInfo;
  }
);
type TUser = {
  password: string;
  login: string;
  theme?: "light" | "dark";
};
type TUserState = {
  userInfo: TUser;
  isLoading: boolean;
  authInfo: {
    isAuth: boolean;
    errorMessage: string;
  };
};

const initialState: TUserState = {
  userInfo: {
    password: "",
    login: "",
    theme: "light",
  },
  isLoading: true,
  authInfo: {
    isAuth: false,
    errorMessage: "",
  },
};

const userSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    userLogout(state) {
      localStorage.removeItem("token");
      deletePasswordAndLogin();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchUserLogin.fulfilled,
        (
          state,
          action: PayloadAction<{
            message: string;
            status: number;
            userInfo: TUser;
          }>
        ) => {
          state.isLoading = false;
          state.userInfo = action.payload.userInfo;
          if (action.payload.status === 200) {
            console.log("data: ", action.payload.message);
            localStorage.setItem("token", action.payload.message);
            state.authInfo.isAuth = true;
            savePasswordAndLogin(
              action.payload.userInfo.login,
              action.payload.userInfo.password
            );
          } else {
            state.authInfo.errorMessage = action.payload.message;
            state.authInfo.isAuth = false;
          }
        }
      )
      .addCase(fetchUserRegistration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchUserRegistration.fulfilled,
        (
          state,
          action: PayloadAction<{
            message: string;
            status: number;
            userInfo: TUser;
          }>
        ) => {
          state.isLoading = false;
          state.userInfo = action.payload.userInfo;
          if (action.payload.status === 201) {
            console.log("data: ", action.payload.message);
            localStorage.setItem("token", action.payload.message);
            state.authInfo.isAuth = true;
          } else {
            state.authInfo.errorMessage = action.payload.message;
          }
        }
      )
      .addCase(fetchUserChangeData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchUserChangeData.fulfilled,
        (state, action: PayloadAction<TUser>) => {
          state.isLoading = false;
          state.userInfo = action.payload;
          console.log("action.payload: ", action.payload);
          savePasswordAndLogin(action.payload.login, action.payload.password);
        }
      );
  },
});
export const { userLogout } = userSlice.actions;

export const userReducer = userSlice.reducer;
