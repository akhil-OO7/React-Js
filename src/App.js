import "./App.css";
import { InsertStudents } from "./jsons/InsertStudents";
import Product from "./jsons/Product";
import StudentData from "./jsons/StudentData";
function App() {
  return (
    <div className="container">
      <InsertStudents />
      <StudentData />
    </div>
  );
}

export default App;
