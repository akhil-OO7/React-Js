import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const warning = "btn btn-warning mx-2";
  const danger = "btn btn-danger mx-2";
  const decrement = () => {
    let lcount = count;
    if (lcount !== 0) setCount(lcount - 1);
  };
  const increment = () => {
    let lcount = count;
    setCount(lcount + 1);
  };
  const changeColor = () => {
    let check = count === 0 ? "btn btn-danger mx-2" : "btn btn-warning mx-2";
    return check;
  };
  return (
    <div className="my-3">
      <button className="btn btn-primary" onClick={decrement}>
        Decrement
      </button>
      <span className={changeColor()}>{count > 0 ? count : "zero"}</span>
      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
