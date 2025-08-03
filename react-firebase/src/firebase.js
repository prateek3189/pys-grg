// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZO_nzX44KHskm2bOPg5hVA19M4jkh794",
  authDomain: "app-160e7.firebaseapp.com",
  projectId: "app-160e7",
  storageBucket: "app-160e7.firebasestorage.app",
  messagingSenderId: "43323715962",
  appId: "1:43323715962:web:c7ac42980b4b27db76e6c3",
  databaseURL: "https://app-160e7-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
