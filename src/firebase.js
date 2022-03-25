import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable

const firebaseConfig = {
  apiKey: "AIzaSyBAK0qoaOnziw5-QKrfVfZL-nF_43dS3CM",
  authDomain: "primeinvestments-a7c0c.firebaseapp.com",
  projectId: "primeinvestments-a7c0c",
  storageBucket: "primeinvestments-a7c0c.appspot.com",
  messagingSenderId: "103839984055",
  appId: "1:103839984055:web:dba2170875c565aab0e032",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
