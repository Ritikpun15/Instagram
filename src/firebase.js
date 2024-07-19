import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbRTQBAPyovw-aip_K6zEI8xpDJRpqjKY",
  authDomain: "instagram-clone-31ac9.firebaseapp.com",
  projectId: "instagram-clone-31ac9",
  storageBucket: "instagram-clone-31ac9.appspot.com",
  messagingSenderId: "7494425744",
  appId: "1:7494425744:web:8366d305bc0c5d91bd8c15",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
