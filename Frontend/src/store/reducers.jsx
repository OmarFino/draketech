import { combineReducers } from "@reduxjs/toolkit";
import LoginReducer, {
  KEY_AUTH,
  logout,
  initialState,
} from "../services/authSlice";

const rootAppReducers = combineReducers({
  [KEY_AUTH]: LoginReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "AUTH/LOGOUT" || action.type === logout()) {
    state = {
      [KEY_AUTH]: initialState,
    };
  }
  return rootAppReducers(state, action);
};

export default rootReducer;
