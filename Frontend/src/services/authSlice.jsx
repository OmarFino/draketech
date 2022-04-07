import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  message: "",
  token: "",
  user: "",
  authentication: false,
  error: false,
  success: false,
  loading: false,
};

export const KEY_AUTH = "AUTH";

const AuthSlice = createSlice({
  name: KEY_AUTH,
  initialState,
  reducers: {
    loginPending: (state, action) => ({
      ...state,
      loading: true,
    }),
    loginSuccess: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      authentication: true,
      token: action.payload.token,
      user: action.payload.user,
      message: " ",
    }),
    loginFailed: (state, action) => ({
      ...state,
      loading: false,
      error: true,
      message: action.payload.error,
    }),
    logout: (state) => ({
      ...state,
      authentication: false,
      error: false,
      success: false,
      loading: false,
      token: "",
      message: "",
      username: "",
    }),
  },
});

export const { loginPending, loginFailed, loginSuccess, logout } =
  AuthSlice.actions;

export default AuthSlice.reducer;
