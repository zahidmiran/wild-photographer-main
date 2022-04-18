// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuLC5y82Pfn4rQZY120fL65xW6Gez4_a0",
  authDomain: "wild-photographer-f106f.firebaseapp.com",
  projectId: "wild-photographer-f106f",
  storageBucket: "wild-photographer-f106f.appspot.com",
  messagingSenderId: "512067743285",
  appId: "1:512067743285:web:0e0678d8ea634134754b7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
