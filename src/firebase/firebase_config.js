import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAI0QwTndpS_GiWttvzhshPGL1h2aFg-5I",
  authDomain: "career-magnet.firebaseapp.com",
  projectId: "career-magnet",
  storageBucket: "career-magnet.appspot.com",
  messagingSenderId: "306972121444",
  appId: "1:306972121444:web:d7550535339e1b23ec8271",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
