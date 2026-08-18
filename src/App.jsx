import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div>
      <StudentCard />
      <StudentCard
  name="Allwin"
  department="Computer Science"
  cgpa="8.5"
/>
<StudentCard
  name="Navya"
  department="Computer Science"
  cgpa="8.5"
/>
<StudentCard
  name="Ragul"
  department="Computer Science"
  cgpa="8.8"
/>
    </div>
  );
}

 



export default App;