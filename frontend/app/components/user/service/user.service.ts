"server";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { joinApi } from "./user.api";
import { IUser } from "../model/user";

export const joinId: any = createAsyncThunk(
  "user/join",
  async (user: IUser) => {
    try {
      const response = joinApi(user);
      return response;
    } catch (error) {
      return error;
    }
  }
);
