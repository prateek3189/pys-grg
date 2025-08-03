import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log(userCredential);
      }
    );
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <div>
      <h1>Signup</h1>
      <div>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="username">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div>
        <button onClick={signUp}>Create User</button>
        <button onClick={signUpWithGoogle}>SignIn with Google</button>
      </div>
    </div>
  );
};

export default Signup;
