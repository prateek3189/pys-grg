import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyC_ETODr84Vfp9UbmQaKoobGqIKszTsioY",
  authDomain: "bookify-17ea9.firebaseapp.com",
  projectId: "bookify-17ea9",
  storageBucket: "bookify-17ea9.firebasestorage.app",
  messagingSenderId: "801437099314",
  appId: "1:801437099314:web:ac248a348c25b07275632b",
  measurementId: "G-ZEZYP3CV1J",
};

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const fireStore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };

  const handleCreateNewBook = async (name, isbn, description, price, cover) => {
    // This is paid
    // const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
    // const uploadResult = await uploadBytes(imageRef, cover);
    return await addDoc(collection(fireStore, "books"), {
      name,
      isbn,
      description,
      price,
      // cover: uploadResult.ref.fullPath,
      cover: "https://m.media-amazon.com/images/I/81aCa8OAqNL.jpg",
      createdAt: new Date(),
      userId: user.uid,
      email: user.email,
      username: user.displayName || user.email.split("@")[0],
      profilePic: user.photoURL,
    });
  };

  const getAllBooks = () => {
    return getDocs(collection(fireStore, "books"));
  };

  const getBookById = async (id) => {
    const docRef = doc(fireStore, "books", id);
    const result = await getDoc(docRef);
    return result;
  };

  const getImageUrl = (path) => {
    return getDownloadURL(ref(storage, path));
  };

  const isLoggedIn = !!user;

  return (
    <FirebaseContext.Provider
      value={{
        signUpUser,
        signInUser,
        signInWithGoogle,
        isLoggedIn,
        user,
        handleCreateNewBook,
        getAllBooks,
        getImageUrl,
        getBookById,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
