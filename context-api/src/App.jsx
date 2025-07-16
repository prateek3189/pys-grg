import "./App.css";
import Item from "./components/Item";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <h1>Cart</h1>

      <div className="cart grid">
        <Item name="Macbook Pro" price={100} />
        <Item name="iPhone 14 Pro" price={200} />
        <Item name="iPad Pro" price={300} />
        <Item name="Apple Watch Series 8" price={400} />
        <Item name="AirPods Pro" price={500} />
        <Item name="AirPods Max" price={600} />
      </div>

      <Cart />
    </div>
  );
}

export default App;
