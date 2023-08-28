import React, { useState } from "react";

const FormEx = () => {
  const [form, setForm] = useState({
    name: "",
    pwd: "",
    gender: "",
  });
  const changeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className="m-3">
      <h1>Form Example</h1>
      <form className="d-flex flex-column col-3">
        <label>Enter your Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={changeInput}
        />
        <label placeholder="Enter your password">Enter your Password:</label>
        <input
          type="password"
          name="pwd"
          value={form.pwd}
          onChange={changeInput}
        />
        <label>Gender: </label>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={changeInput}
          />
          <b>&nbsp;Male</b>
          &nbsp;&nbsp;
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={changeInput}
          />
          <b>&nbsp;Female</b>
        </div>
      </form>
      <div>{JSON.stringify(form)}</div>
    </div>
  );
};

export default FormEx;
