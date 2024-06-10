"server";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { joinApi, loginApi } from "./user.api";
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

export const loginId: any = createAsyncThunk(
  "user/login",
  async (user: IUser) => {
    try {
      const response = loginApi(user);
      return response;
    } catch (error) {
      return error;
    }
  }
);
