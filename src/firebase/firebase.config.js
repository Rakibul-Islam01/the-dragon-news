// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAczZ_4WQ_WRFhkdMgZN6gXOB5OliR9wTA",
  authDomain: "the-dragon-news-9bfed.firebaseapp.com",
  projectId: "the-dragon-news-9bfed",
  storageBucket: "the-dragon-news-9bfed.appspot.com",
  messagingSenderId: "220383531020",
  appId: "1:220383531020:web:ad6284f71afaa7ccfc1e29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;