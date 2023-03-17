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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa
        quis dolores laboriosam itaque eius facilis excepturi inventore
        reiciendis facere blanditiis quod, hic atque! Nisi quas architecto
        reprehenderit veritatis a distinctio, alias accusantium facilis ea
        voluptates? Ab fugit quaerat magnam impedit atque, debitis iure. Beatae
        cum aut atque, ipsum quos molestias iste expedita quia reiciendis
        nesciunt mollitia quae similique aspernatur temporibus incidunt
        necessitatibus accusantium suscipit adipisci quasi fugiat aliquid
        asperiores doloribus non voluptate. Distinctio molestiae rem eveniet
        laudantium numquam dolores quo officiis nulla voluptate ipsum qui
        delectus ea ad, ducimus amet sit dolorum cumque veniam aspernatur et?
        Corrupti, atque veritatis.
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
