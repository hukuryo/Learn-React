import { useState } from "react";
import { TestComponent } from "./components/TestComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TestComponent name={"Taro"} onClick={() => console.log("click!")} />
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}

export default App;
