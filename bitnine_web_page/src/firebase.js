import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYsk2b7Xi3VLellU93cjo8-BJwH7qx9G8",
  authDomain: "bitnine-a5468.firebaseapp.com",
  projectId: "bitnine-a5468",
  storageBucket: "bitnine-a5468.appspot.com",
  messagingSenderId: "349056873724",
  appId: "1:349056873724:web:32aab1f42dff26b4dc5379",
  measurementId: "G-N9BTY9LCPP",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
