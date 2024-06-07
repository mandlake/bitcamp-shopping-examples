import { createSlice } from "@reduxjs/toolkit";
import { joinId } from "./user.service";
import { initialState } from "../init/userState.init";

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(joinId.fulfilled, (state: any, { payload }: any) => {
      state.array = payload;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
