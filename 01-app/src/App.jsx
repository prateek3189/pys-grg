import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ToDos from "./components/ToDos";
import Button from "./components/Button";

function App() {
  return (
    <div className="todo-container">
      <div className="main-container">
        <Header />
        <ToDos />
      </div>
      <div className="button-container">
        <Button>Add To Do</Button>
      </div>
    </div>
  );
}

export default App;
