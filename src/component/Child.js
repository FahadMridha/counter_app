import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";

const Child = () => {
  const { count, setCount } = useContext(COUNTER_CONTEXT);
  return (
    <div className="text-center">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <button onClick={() => setCount((prvState) => prvState - 1)}>
        minuse
      </button>
    </div>
  );
};

export default Child;
