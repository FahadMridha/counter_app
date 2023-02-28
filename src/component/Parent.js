import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

const Parent = () => {
  const { count } = useContext(COUNTER_CONTEXT);

  return (
    <div>
      <div>{count}</div>
      <Child />
    </div>
  );
};

export default Parent;
