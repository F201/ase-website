import {Request} from "firebase-functions/v2/https";

export const sanitizeRequestMethod = async (
  request: Request, allowedMethods: string[]): Promise<void> => {
  if (!request || typeof request.method !== "string") {
    throw new Error("Request method is not a string");
  }

  if (allowedMethods.length === 0) {
    throw new Error("Allowed methods cannot be empty");
  }

  if (!allowedMethods.includes(request.method)) {
    throw new Error("Method Not Allowed");
  }
};
