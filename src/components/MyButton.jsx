import React from "react";

const MyButton = (props) => {
  return (
    <div>
      {/* <button onClick={() => props.onPress("Passed through MyButton function")}>
        Click Me
      </button> */}
      <button className="btn btn-dark" onClick={() => props.onPress()}>
        Change Name
      </button>
    </div>
  );
};

export default MyButton;
