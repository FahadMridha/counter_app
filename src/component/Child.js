import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

const Child = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "DECREMENT") {
      return state - action.payload.count;
    } else if (action.type === "INCREMENT") {
      return state + action.payload.count;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-center ">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, facilis
        quia! Odio recusandae iure adipisci ipsam ut! Quae praesentium aliquam
        iusto fugit aut, dolor ratione voluptatibus iure dolorum mollitia neque.
      </p>

      <p className="text-xl font-bold text-teal-800">{state}</p>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}
      >
        Increment
      </button>
      <button
        className="btn btn-secondary ml-2"
        onClick={() => dispatch({ type: "DECREMENT", payload: { count: 5 } })}
      >
        Decrement
      </button>
    </div>
  );
};

export default Child;
