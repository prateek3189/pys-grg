import "./App.css";
import Counter from "./Counter";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>React Redux Toolkit</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <Counter />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
