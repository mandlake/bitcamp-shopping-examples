"service";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const joinApi = async (user: IUser) => {
  try {
    const response = await prisma.users.create({
      data: {
        username: user.username,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
    console.log("success");
    return response.userId;
  } catch (error) {
    return error;
  }
};
