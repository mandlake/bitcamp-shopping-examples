"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(data: {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}) {
  const { firstName, lastName, email, username, password } = data;
  const res = await prisma.users.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
    },
  });
  console.log(res);
}

export async function login(data: { username: string; password: string }) {
  const { username, password } = data;
  const user = await prisma.users.update({
    where: {
      username: username,
      password: password,
    },
    data: {
      refreshToken: "token1",
    },
  });
  console.log(user);
  return user;
}

export async function forgotPassword(data: {
  username: string;
  password: string;
}) {
  const { username, password } = data;
  const user = await prisma.users.update({
    where: {
      username: username,
    },
    data: {
      password: password,
    },
  });
  console.log(user);
  return user;
}

export async function forgotUsername(data: { email: string }) {
  const { email } = data;
  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  console.log(user);
  return user;
}

export const getUser = (data: string) => {
  try {
    const user = prisma.users.findUnique({
      where: {
        username: data,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null; // Indicate error by returning null
  }
};
