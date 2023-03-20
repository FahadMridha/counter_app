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
    <div className="text-center">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
        quisquam. Natus culpa odit debitis illo nemo dicta delectus dolores
        perferendis! Voluptates maiores dolores aliquid delectus, atque officiis
        nam cumque, vel ipsam ipsum quibusdam! Dolores, perferendis excepturi!
        Reiciendis deleniti possimus voluptatem molestiae, aliquid vero eligendi
        beatae accusamus qui enim reprehenderit ex officiis accusantium
        laboriosam perferendis repudiandae molestias natus ipsum? Non nesciunt
        doloribus, magni vel itaque quae iste necessitatibus ullam ex voluptatum
        nemo, consectetur dignissimos. Vitae in culpa mollitia, quos explicabo
        porro quam, facilis aspernatur nisi iste accusantium consequuntur earum
        minus id eius. Exercitationem cumque suscipit velit assumenda commodi
        dolorem, excepturi vitae.
      </p>
      <p>{state}</p>
      <button
        onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT", payload: { count: 5 } })}
      >
        minuse
      </button>
    </div>
  );
};

export default Child;
