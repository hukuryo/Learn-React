import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { ColorSchemes } from "./components/ColorSchemes";

function App() {
  return (
    <>
      <MantineProvider>
        <ColorSchemes />
      </MantineProvider>
    </>
  );
}

export default App;
