import React, { useState } from "react";

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
  //   const onSubmit = () => {
  //     if(student.id !== 0 && student.name !== "")

  //     }
  //   };
  return (
    <div>
      <h2> Insert Student Information</h2>
      <form className="d-flex flex-column col-4">
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
        <button
          type="submit"
          className="btn btn-outline-warning my-3"
          onSubmit={onSubmit}
        >
          Insert Information
        </button>
      </form>
    </div>
  );
};
