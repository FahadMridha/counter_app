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
      <p>{state}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        soluta, veritatis hic, illo consequatur officia incidunt dolore quos
        autem recusandae ex officiis ea, perferendis quibusdam labore magni cum.
        Unde excepturi, sit ratione, voluptatibus quisquam assumenda culpa
        aliquid sed accusamus pariatur in voluptate animi numquam aspernatur
        exercitationem eius, incidunt provident quaerat eum aliquam! Quaerat
        obcaecati earum eius praesentium vero. Iure, voluptate accusantium.
        Minima autem necessitatibus tempora sit libero, pariatur exercitationem
        assumenda aperiam officia alias quo fugiat reprehenderit aut voluptate
        vitae rem consequatur ad quidem minus nostrum! Labore quod fugit a
        dolores consequuntur voluptatibus, voluptate beatae quae nesciunt sit,
        voluptates pariatur dolor.
      </p>
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
