import "./App.css";
import Counter from "./Counter";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux</h1>
      <main>
        <section>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            Increment
          </button>

          <Counter />
        </section>
        <section>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            Decrement
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
