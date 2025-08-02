import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  if (state.todo.loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h1>To Do</h1>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>

      {state.todo.data &&
        state.todo.data.map((data) => {
          return (
            <div key={data.id}>
              <h2>{data.title}</h2>
              <p>{data.completed ? "Completed" : "Not Completed"}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
