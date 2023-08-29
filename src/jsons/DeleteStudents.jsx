import React, { useState } from "react";
import axios from "axios";

export const DeleteStudents = () => {
  const [sid, setSid] = useState();
  const insertInfo = (e) => {
    setSid(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (sid !== 0) {
      axios
        .delete(`http://10.21.78.79:8080/students/${sid}`)
        .then((res) => alert("Information Deleted"))
        .catch((err) => console.log(err));
    } else {
      alert("Please enter information");
    }
  };
  return (
    <div>
      <h2> Delete Student Information</h2>
      <form className="d-flex flex-column col-4" onSubmit={onSubmit}>
        <label>Enter student id</label>
        <input type="text" name="sid" value={sid} onChange={insertInfo} />
        <button type="submit" className="btn btn-outline-warning my-3">
          Delete Information
        </button>
      </form>
    </div>
  );
};
