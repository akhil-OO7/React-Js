import React, { useState } from "react";
import axios from "axios";

export const InsertStudents = () => {
  const [student, setStudent] = useState({
    sid: "",
    name: "",
    couse: "",
  });
  const insertInfo = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (student.id !== 0 && student.name !== "" && student.course !== "") {
      axios
        .post("http://10.21.78.79:8080/students", student)
        .then((res) => alert("Information Inserted"))
        .catch((err) => console.log(err));
    } else {
      alert("Please enter information");
    }
  };
  return (
    <div>
      <h2> Insert Student Information</h2>
      <form className="d-flex flex-column col-4" onSubmit={onSubmit}>
        <label>Enter student id</label>
        <input
          type="text"
          name="sid"
          value={student.sid}
          onChange={insertInfo}
        />
        <label>Enter student name</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={insertInfo}
        />
        <label>Enter student course</label>
        <input
          type="text"
          name="course"
          value={student.course}
          onChange={insertInfo}
        />
        <button type="submit" className="btn btn-outline-warning my-3">
          Insert Information
        </button>
      </form>
    </div>
  );
};
