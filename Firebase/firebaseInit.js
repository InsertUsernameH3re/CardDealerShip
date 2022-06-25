import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Firebase config parameters
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
export function initializeFirebase() {
  const app = initializeApp(firebaseConfig);

//Sets database to Firestore
  const db = getFirestore()
  return db;
}
