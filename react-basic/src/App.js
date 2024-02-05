import Header from "./components/Header";
import StudentList from "./components/StudentList";
import "./App.css";
import Addform from "./components/Addform";
import { useState } from "react";

function App() {
  const [students, setStudent] = useState([]);

  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Header title="Home" />
      <main>
        <Addform students={students} setStudent={setStudent} />
        <StudentList students={students} deleteStudent={deleteStudent} />
      </main>
    </div>
  );
}

export default App;
