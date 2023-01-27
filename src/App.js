import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(6);
  const timer = setTimeout(() => {
    setCounter(counter - 1);
  }, 1000);

  if (counter === -1) {
    clearTimeout(timer);
    setCounter(6);
  }

  let data = counter;
  return (
    <div className="App">
      <div className="Timer_cart">
        <p className="increaseCounter">{data}</p>
      </div>
      <Card />
    </div>
  );
}
export default App;
