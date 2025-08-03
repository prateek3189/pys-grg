import "./App.css";
import SignIn from "./pages/Signin";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin.jsx";

function App() {
  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <Signup />
      <Signin />
    </div>
  );
}

export default App;
