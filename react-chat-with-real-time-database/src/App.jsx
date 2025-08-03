import "./App.css";
import { useFirebase } from "./context/Firebase";
import { useEffect, useState } from "react";
import { getChat, onChatUpdate } from "./context/Firebase";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [prateekChat, setPrateekChat] = useState([]);
  const [johnChat, setJohnChat] = useState([]);

  useEffect(() => {
    // const fetchChat = async () => {
    //   const prateekData = await getChat("chat/prateek");
    //   const johnData = await getChat("chat/john");

    //   if (prateekData.exists()) {
    //     console.log("Prateek Data:", prateekData.val());
    //     setPrateekChat(prateekData.val());
    //   } else {
    //     console.log("No data available for Prateek");
    //   }

    //   if (johnData.exists()) {
    //     console.log("John Data:", johnData.val());
    //     setJohnChat(johnData.val());
    //   } else {
    //     console.log("No data available for John");
    //   }
    // };

    // fetchChat();

    onChatUpdate("prateek", (snapshot) => {
      if (snapshot.exists()) {
        console.log("Prateek Chat Updated:", snapshot.val());
        setPrateekChat(snapshot.val());
      } else {
        console.log("No data available for Prateek");
      }
    });

    onChatUpdate("john", (snapshot) => {
      if (snapshot.exists()) {
        console.log("John Chat Updated:", snapshot.val());
        setJohnChat(snapshot.val());
      } else {
        console.log("No data available for Prateek");
      }
    });
  }, []);

  const firebase = useFirebase();

  const putDataPrateek = () => {
    const id = prateekChat.length + 1; // Incrementing ID based on current length
    const chatData = [
      ...prateekChat,
      {
        id,
        message: "Prateek: Pinged at " + new Date().toLocaleTimeString(),
      },
    ];
    firebase.putData("chat/prateek", chatData);
  };

  const putDataJohn = () => {
    const id = johnChat.length + 1; // Incrementing ID based on current length
    const chatData = [
      ...johnChat,
      {
        id,
        message: "John: Pinged at " + new Date().toLocaleTimeString(),
      },
    ];
    firebase.putData("chat/john", chatData);
  };

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

      <br />
      <br />
      <br />
      <button onClick={putDataPrateek}>Prateek is Saying</button>
      <button onClick={putDataJohn}>John is Saying</button>
      <br />
      <br />
      <div className="flex">
        <div className="chat-container prateek-box">
          <h2>Prateek</h2>
          <ul>
            {johnChat.map((chat) => (
              <li>{chat.message}</li>
            ))}
          </ul>
        </div>
        <div className="chat-container john-box">
          <h2>John</h2>
          <ul>
            {prateekChat.map((chat) => (
              <li>{chat.message}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
