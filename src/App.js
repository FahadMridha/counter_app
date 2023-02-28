import "./App.css";
import Parent from "./component/Parent";
import { createContext, useState } from "react";
export const COUNTER_CONTEXT = createContext();
function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="App">
        <Parent />
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
