"use server";

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username } = req.body; // Assuming username is sent in the request body

  if (req.method === "POST") {
    try {
      // Your existing logout logic (update user with null refreshToken)
      const user = await prisma.users.update({
        where: {
          username,
        },
        data: {
          refreshToken: null,
        },
      });

      res.status(200).json({ message: "logout" }); // Send successful logout message
    } catch (error) {
      console.error(error); // Log any errors
      res.status(500).json({ message: "Error logging out" }); // Send error message
    }
  } else {
    res.status(405).json({ message: "Method not allowed" }); // Handle invalid methods
  }
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
