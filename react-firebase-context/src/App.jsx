import "./App.css";
import { useFirebase } from "./context/Firebase";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFirebase();
  console.log("firebase", firebase);
  return (
    <div className="App">
      <h1>Firebase Context</h1>
      <div>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div>
        <button
          onClick={() => {
            firebase.signUp(email, password);
            firebase.putData("users/prateekmagarde", {
              email,
              password,
            });
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default App;
