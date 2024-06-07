import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {

  if(request.method !== "POST") {
    response.status(405).send({
      data: [],
      status: "error",
      message: "Method Not Allowed",
    });
    return;
  } 


  logger.info("Hello logs!", {structuredData: true});

  const { user } = request.body;
  response.status(200).send({
    data: [],
    status: "success",
    message: `Hello from ${user}!`,
  });
});
