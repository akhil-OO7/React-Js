import React, { useState } from "react";
import ToggleUseEffect from "./ToggleUseEffect";

const UseStateEx1 = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const increment5 = () => {
    increment();
    increment();
    increment();
    increment();
    increment();
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>{" "}
      {count}
      <button className="btn btn-primary" onClick={increment5}>
        Increment +5
      </button>{" "}
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Show Toggle
      </button>
      {toggle && <ToggleUseEffect />}
    </div>
  );
};

export default UseStateEx1;
