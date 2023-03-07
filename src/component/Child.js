import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

const Child = () => {
  const initialState = 0;
  const reducher = (state, action) => {
    if (action.type === "DECREMENT") {
      return state - action.payload.count;
    } else if (action.type === "INCREMENT") {
      return state + action.payload.count;
    }
  };
  const [state, dispatch] = useReducer(reducher, initialState);

  return (
    <div className="text-center">
      <p>{state}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ullam
        possimus numquam neque. Perferendis harum architecto ducimus facilis,
        quo eligendi facere suscipit quidem maxime deserunt nam omnis. Nihil
        ducimus praesentium nemo odit, repellendus, aliquid soluta illum non id
        possimus vel. Sed earum deleniti magni eos soluta, veniam modi quam
        alias excepturi id sint, eligendi voluptate minus cumque ullam
        laudantium exercitationem. Ab quam quos quis voluptatum libero, sequi
        aliquam aliquid odit laborum quisquam rerum velit harum repudiandae
        suscipit reprehenderit optio dolores doloremque! Eveniet culpa fugiat
        ullam dolore. Fugiat, vero! Quam veniam debitis vitae est inventore
        consequatur labore aut assumenda consequuntur animi.
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
