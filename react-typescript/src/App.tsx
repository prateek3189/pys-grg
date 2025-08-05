import React, { Suspense, useState } from "react";
import "./App.css";

// Lazy Loading
const MyComponent = React.lazy(() => import("./components/MyComponent"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Lazy Loading */}
      <Suspense fallback={<p>Loading...</p>}>
        <MyComponent count={count} />
      </Suspense>
      <button onClick={() => setCount((v) => v + 1)}>+</button>
    </div>
  );
}

export default App;
