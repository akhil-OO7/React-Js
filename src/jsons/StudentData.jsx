import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentData = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://10.21.78.79:8080/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      StudentData
      <table className="table table-success">
        <thead className="table table-warning">
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <td>{student.sid}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentData;
