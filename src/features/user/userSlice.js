import { configureStore, createSlice } from "@reduxjs/toolkit";

import { loadState } from "features/browser/browserStorage";

const persistedState = loadState();

const initialState = persistedState
  ? persistedState.user
  : {
      loginInfos: null,
      token: null,
      firstName: null,
      lastName: null,
    };

const initialStateMockup = {
  loginInfos: null,
  token: null,
  firstName: null,
  lastName: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginInfos: (state, action) => {
      state.loginInfos = action.payload;
    },
    setUserToken: (state, action) => {
      state.token = action.payload;
    },
    setUserFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setUserLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setLogout: (state) => {
      state.loginInfos = null;
      state.token = null;
      state.firstName = null;
      state.lastName = null;
    },
  },
});

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const {
  setLoginInfos,
  setUserToken,
  setUserFirstName,
  setUserLastName,
  setLogout,
} = userSlice.actions;
