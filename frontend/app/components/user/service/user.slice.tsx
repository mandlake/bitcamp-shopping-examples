import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../init/userState.init";

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const getAllUsers = (state: any) => state.user.array;
export const getUserById = (state: any) => state.user.json;
export const getModifiedUserById = (state: any) => state.user.array;
export const getDeleteUserById = (state: any) => state.user.array;
export const getJoinId = (state: any) => state.user.array;

export const {} = userSlice.actions;

export default userSlice.reducer;
