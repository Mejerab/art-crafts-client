// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjE0TMPfXMz51L9nzgKz3pMvURWjr5bBw",
  authDomain: "craft-mania-aa8ed.firebaseapp.com",
  projectId: "craft-mania-aa8ed",
  storageBucket: "craft-mania-aa8ed.appspot.com",
  messagingSenderId: "408197787117",
  appId: "1:408197787117:web:5f7fe0489cd8a155170be4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
