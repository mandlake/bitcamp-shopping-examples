"use server";

import { PrismaClient } from "@prisma/client";
import { IUser } from "../model/user";

const prisma = new PrismaClient();

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
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
