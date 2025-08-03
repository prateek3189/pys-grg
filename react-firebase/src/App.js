import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

import { app } from "./firebase";
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
    });
  });

  if (!user) {
    return (
      <div className="App">
        <h1>Firebase React App</h1>
        <Signup />
        <Signin />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Welcome, {user.email}</h1>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}

export default App;
