import "./App.css";
function Student(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}


function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>
      <Student
        
        name="Monica Geller"
        course="BTech (Computer Science)"
        marks="95"
      />
      <Student
        name="Chandler Bing"
        course="BTech (Computer Science)"
        marks="94"
      />
      <Student
        name="Joey Tribbiani"
        course="BTech (Computer Science)"
        marks="90"
      />
    </div>
  );
}
export default App;
