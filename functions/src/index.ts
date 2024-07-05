import {initializeApp} from 'firebase-admin/app';
import dotenv from 'dotenv';

import {
  BeforeUserCreated,
  BeforeUserSignedIn,
  CreateUser,
  SyncUser,
  HelloWorld,
} from './users/controller';

dotenv.config();

const config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
};

initializeApp(config);

export {
  CreateUser, BeforeUserCreated, BeforeUserSignedIn, SyncUser,
  HelloWorld,
};
