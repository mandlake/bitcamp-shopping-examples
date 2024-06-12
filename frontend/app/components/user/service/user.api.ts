"use server";

import { PrismaClient } from "@prisma/client";
import { IUser } from "../model/user";
import { cookies } from "next/headers";
import instance from "@/app/config/axios-config";

const prisma = new PrismaClient();
const setCookie = cookies();

export const joinApi = async (user: IUser) => {
  const { username, password, firstName, lastName, email } = user;
  try {
    const response = await prisma.users.create({
      data: {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
        accessToken: "",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const loginApi = async (user: IUser) => {
  const { username, password } = user;
  try {
    // const response = await prisma.users.update({
    //   where: {
    //     username: username,
    //     password: password,
    //   },
    //   data: {
    //     accessToken: "1234567890",
    //   },
    // });

    const response = await instance().post("/users/login", user);
    setCookie.set("accessToken", "1234567890");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const forgotUsernameApi = async (email: string) => {
  try {
    const response = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    return response?.username;
  } catch (error) {
    return error;
  }
};

export const forgotPasswordApi = async (user: IUser) => {
  const { username, password } = user;
  try {
    const response = await prisma.users.update({
      where: {
        username: username,
      },
      data: {
        password: password,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const logoutApi = async (accessToken: string) => {
  try {
    const response = await prisma.users.updateMany({
      where: {
        accessToken: accessToken,
      },
      data: {
        accessToken: "",
      },
    });
    setCookie.delete("accessToken");
    return response;
  } catch (error) {
    return error;
  }
};
