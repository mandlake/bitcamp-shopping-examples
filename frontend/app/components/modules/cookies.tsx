"use server";

// Import necessary modules
import { cookies } from "next/headers";

// Function to retrieve access token from cookie
const getAccessToken = () => {
  try {
    const setCookie = cookies();
    if (setCookie.has("accessToken")) {
      const cookie = setCookie.get("accessToken");
      console.log("cookie retrieved: ", cookie?.name); // Mask sensitive information if needed
      return cookie;
    } else {
      console.log("accessToken is not found");
      return null;
    }
  } catch (error) {
    console.error("Error accessing cookie:", error);
    return null; // Return null in case of errors
  }
};

// Function to delete the access token cookie
const deleteAccessToken = () => {
  try {
    const setCookie = cookies();
    setCookie.delete("accessToken");
  } catch (error) {
    console.error("Error deleting cookie:", error);
  }
};

export { getAccessToken, deleteAccessToken };
