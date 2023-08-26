import React, { useEffect, useState } from "react";

const ToggleUseEffect = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mouseMove = (event) => {
    setX(event.clientX);
    setY(event.clientY);
    console.log("Inside mouseMove function");
  };
  useEffect(() => {
    console.log("Inside useEffect");
    window.addEventListener("mousemove", mouseMove);
    // return () => {
    //   window.removeEventListener("mousemove", mouseMove);
    // };
  });
  return (
    <div>
      ToggleUseEffect
      <h2>
        X: {x} Y: {y}
      </h2>
    </div>
  );
};

export default ToggleUseEffect;
