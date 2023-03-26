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
      <p className="text-xl font-bold text-teal-800">{state}</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem cum itaque
        libero sapiente incidunt. Ducimus sunt iure in nihil ex iusto amet
        reiciendis eum mollitia dignissimos culpa aliquam, repudiandae at
        ratione aliquid, ullam quod nesciunt delectus ab voluptatem suscipit
        vero? Dolor facilis, ullam repudiandae dolorum consequatur ratione. Eos
        earum officiis ipsa molestiae odio magnam molestias aut provident, vel
        iusto facere dignissimos consequuntur quae nostrum laborum magni! Ad,
        aperiam quis alias commodi illo cupiditate accusamus eveniet ipsa
        asperiores? Dolore consequuntur officiis deleniti nesciunt ex reiciendis
        earum, dolorum culpa animi ipsa sint modi numquam eveniet quibusdam
        pariatur fugit mollitia voluptate quisquam non?
      </p>
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
