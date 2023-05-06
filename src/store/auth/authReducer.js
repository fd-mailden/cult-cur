import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    userData: null,
    accessToken: null,
    uid: null,
    isError: false,
    isLoading: false,
  },
  reducers: {
    setUser(state, action) {
      state.userData = action.payload;
    },
    onAuth(state, action) {
      state.isAuth = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    onClear(state, action) {
      state.isAuth = false;
      state.userData = null;
      state.accessToken = null;
    },
  },

});

export default authReducer.reducer;
export const { setUser, onAuth, onClear , setAccessToken} = authReducer.actions;
