import "./App.css";
import { DeleteStudents } from "./jsons/DeleteStudents";
import { InsertStudents } from "./jsons/InsertStudents";
import Product from "./jsons/Product";
import StudentData from "./jsons/StudentData";
import { UpdateStudents } from "./jsons/UpdateStudents";
function App() {
  return (
    <div className="container">
      <DeleteStudents />
      <StudentData />
    </div>
  );
}

export default App;
