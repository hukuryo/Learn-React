import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { useState } from "react";
import { TestComponent } from "./components/TestComponent";
import { CodeHighlightZone } from "./components/CodeHighlight";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MantineProvider>
        <TestComponent name={"Taro"} onClick={() => console.log("click!")} />
        <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        <CodeHighlightZone />
      </MantineProvider>
    </>
  );
}

export default App;
