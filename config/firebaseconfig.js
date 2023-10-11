// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXngGhohvq3T7cFxBTUH5lJwOS9pE_2l8",
  authDomain: "shopping-list-app-59958.firebaseapp.com",
  projectId: "shopping-list-app-59958",
  storageBucket: "shopping-list-app-59958.appspot.com",
  messagingSenderId: "1003348752862",
  appId: "1:1003348752862:web:dad033665eea600f0f854f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);