import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function incCount() {
    var c = count + 1;
    setCount(c);
  }

  function decCount() {
    var c = count - 1;
    setCount(c);
  }

  var date = new Date();
  var year = date.getFullYear();

  return (
    <div className="App">
      <h1>COUNTY COUNTER</h1>
      <h3>{count}</h3>
      <button id="btn1" onClick={incCount}>
        +
      </button>
      <button id="btn2" onClick={decCount}>
        -
      </button>
      <footer>
        <p>Copyright @ {year}</p>
        <p>Made by Jatin Sharma</p>
      </footer>
    </div>
  );
}
