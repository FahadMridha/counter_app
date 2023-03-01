import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";

const Child = () => {
  const { count, setCount } = useContext(COUNTER_CONTEXT);
  return (
    <div className="text-center">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta
        hic. Eum, voluptatum distinctio rerum ut vel maiores neque, repellendus
        deleniti ad nesciunt iure mollitia totam est cupiditate harum ullam
        libero dolorum voluptates? Voluptatum neque temporibus, optio alias
        autem voluptas reiciendis magnam quasi, placeat consequatur maxime
        blanditiis in id? Quis sequi minima, debitis temporibus incidunt
        inventore esse architecto qui ratione assumenda in quam quod rem
        explicabo aspernatur voluptas mollitia quas facere iste excepturi!
        Doloremque consequatur, autem quidem qui, maiores perferendis quam
        impedit quibusdam est vel eum! Fugit, nihil. Repellendus cumque ab quo
        aut debitis deserunt praesentium illum commodi tempore laboriosam, quas,
        voluptate modi dolore? Voluptates laborum dolorem cum perferendis velit
        fugit at deserunt consequuntur, eligendi harum laboriosam natus quisquam
        quod aspernatur, repellendus repellat autem facilis non excepturi!
        Aperiam eius, culpa fugiat cumque omnis, ea tempore laborum quas
        voluptatum illum cupiditate numquam ullam enim necessitatibus explicabo
        ab sunt commodi itaque! Praesentium, repudiandae, quaerat quos a saepe
        libero maxime cupiditate impedit, quibusdam dolorem veniam quis quam. Ex
        porro, facere architecto quo natus officia omnis quae quidem cumque.
        Similique eveniet blanditiis numquam esse exercitationem quasi quam est,
        itaque minus, velit temporibus omnis quo deleniti dolor alias soluta
        ducimus ab, distinctio nobis? Vero, consequatur.
      </p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <button onClick={() => setCount((prvState) => prvState - 1)}>
        minuse
      </button>
    </div>
  );
};

export default Child;
