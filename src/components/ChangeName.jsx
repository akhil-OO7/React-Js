import React, { useState } from "react";
import MyButton from "./MyButton";

const ChangeName = () => {
  const [name, setName] = useState("MCA");
  const changeName = () => {
    setName("Akhil");
  };
  return (
    <div>
      <h2>Your name is {name}</h2>
      <MyButton onPress={changeName} />
    </div>
  );
};

export default ChangeName;
