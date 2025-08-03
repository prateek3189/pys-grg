import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase";

const auth = getAuth(app);
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
      </div>
    </div>
  );
};

export default Signup;
