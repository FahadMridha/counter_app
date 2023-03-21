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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero
        explicabo cum quibusdam, voluptatibus omnis quas necessitatibus, rem
        laborum assumenda earum provident quod molestias dignissimos ratione.
        Fugiat, impedit itaque earum quae expedita voluptatem ab amet vitae vero
        eum quo aut fuga cum debitis facere temporibus ut porro molestias sequi
        atque reiciendis numquam natus. Sit fugit deserunt architecto odit magni
        obcaecati ea illum cumque. Quos aperiam sed, doloremque, ullam suscipit
        velit voluptatibus necessitatibus maxime eligendi earum ipsum animi
        magnam a hic laudantium eveniet nemo facere ea alias aspernatur ex ut
        minus. Consequuntur corporis omnis provident officiis, eaque voluptas
        praesentium ullam cum beatae iste quos eos id soluta deleniti mollitia
        quis, quisquam neque inventore alias. Ad atque molestiae consequatur
        impedit dolor nam.
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
