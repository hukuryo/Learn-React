import { useChecks } from "./hooks/useChecks";

const labels = ["check 1", "check 2", "check 3"];

function App() {
  const [isAllChecked, renderChecks] = useChecks(labels);
  return (
    <div>
      {renderChecks()}
      <p>
        <button disabled={!isAllChecked}>次へ</button>
      </p>
    </div>
  );
}

export default App;
