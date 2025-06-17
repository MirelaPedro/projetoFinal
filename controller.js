// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeyzfuZ-VgJLOEMY5d9Ksyn5A_jjO0D3E",
  authDomain: "purplewave-a8cd7.firebaseapp.com",
  projectId: "purplewave-a8cd7",
  storageBucket: "purplewave-a8cd7.firebasestorage.app",
  messagingSenderId: "228587612996",
  appId: "1:228587612996:web:741be12ff4417b7fa74511",
  measurementId: "G-T1N747L33G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportando funções
export const auth = getAuth(app);
export const db = getFirestore(app);
