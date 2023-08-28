import React, { useEffect, useState } from "react";
import axios from "axios";

const ReadGit = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="justify-content-center m-3">
      <h2>Reading Git Information</h2>
      <table className="table table-dark">
        <thead className="table table-warning">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody className="table table-success">
          {data.map((row) => (
            <tr>
              <td style={{ verticalAlign: "middle" }}>{row.id}</td>
              <td style={{ verticalAlign: "middle" }}>{row.login}</td>
              <td style={{ verticalAlign: "middle" }}>
                <img
                  src={row.avatar_url}
                  width="100px"
                  height="100px"
                  alt="pic-not-found"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadGit;
