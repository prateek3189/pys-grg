import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref, get, child, onValue } from "firebase/database";
import { useContext } from "react";

// Initialize all apps
const firebaseConfig = {
  apiKey: "AIzaSyCZO_nzX44KHskm2bOPg5hVA19M4jkh794",
  authDomain: "app-160e7.firebaseapp.com",
  projectId: "app-160e7",
  storageBucket: "app-160e7.firebasestorage.app",
  messagingSenderId: "43323715962",
  appId: "1:43323715962:web:c7ac42980b4b27db76e6c3",
  databaseURL: "https://app-160e7-default-rtdb.firebaseio.com/",
};
export const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

// Creating Hooks for the Context
const FirebaseContext = createContext(null);
export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const getChat = (user) => {
  return get(child(ref(database), user));
};

export const onChatUpdate = (user, callback) => {
  return onValue(ref(database, "chat/" + user), callback);
};

// Firebase Provider
export const FirebaseProvider = ({ children }) => {
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => {
    return set(ref(database, key), data);
  };

  return (
    <FirebaseContext.Provider value={{ signUp, putData }}>
      {children}
    </FirebaseContext.Provider>
  );
};
