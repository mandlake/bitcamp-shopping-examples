"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(data: any) {
  const { name, email, username, password } = data;
  const res = await prisma.user.create({
    data: {
      name: name,
      email: email,
      username: username,
      password: password,
    },
  });
  console.log(res);
}

export async function login(data: any) {
  const { username, password } = data;
  const user = await prisma.user.update({
    where: {
      username: username,
      password: password,
    },
    data: {
      tokens: "token1",
    },
  });
  console.log(user);
  return user;
}

export async function forgotPassword(data: any) {
  const { username, password } = data;
  const user = await prisma.user.update({
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

export async function forgotUsername(data: any) {
  const { email } = data;
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  console.log(user);
  return user;
}

export async function logout(data: any) {
  const user = await prisma.user.update({
    where: {
      username: data.username,
    },
    data: {
      tokens: null,
    },
  });
  return { message: "logout" };
}

export const getUser = (data: any) => {
  try {
    const user = prisma.user.findUnique({
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
