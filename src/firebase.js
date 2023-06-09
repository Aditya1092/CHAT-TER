// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
 import { getStorage} from "firebase/storage"; 
  
const firebaseConfig = {
  apiKey: "AIzaSyAd8uoErmbGdbwx38MAh72jQIkwQ5tGjj4",
  authDomain: "chat-72b6a.firebaseapp.com",
  projectId: "chat-72b6a",
  storageBucket: "chat-72b6a.appspot.com",
  messagingSenderId: "1059308404064",
  appId: "1:1059308404064:web:8c2f926f56802b225b3205"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage(); 
export const db = getFirestore();