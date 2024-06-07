"service";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { joinApi } from "./user.api";

export const joinId: any = createAsyncThunk(
  "users/join",
  async (user: IUser) => {
    try {
      const response = joinApi(user);
      return response;
    } catch (error) {
      return error;
    }
  }
);
