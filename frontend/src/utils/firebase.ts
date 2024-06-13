import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

export const VITE_FIREBASE_CONFIG = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const firebaseApp = initializeApp(VITE_FIREBASE_CONFIG);

const HOST_NAME = "127.0.0.1";
const NODE_ENV = import.meta.env.VITE_PROJECT_ENV;

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

if (NODE_ENV === "development") {
  console.log("Using Emulator");

  connectAuthEmulator(auth, `http://${HOST_NAME}:9099`);
  connectFirestoreEmulator(firestore, HOST_NAME, 8080);
  connectStorageEmulator(storage, HOST_NAME, 9199);
}

export { auth, firestore, storage, firebaseApp };
