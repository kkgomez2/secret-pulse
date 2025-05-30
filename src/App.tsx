import { useNavigate } from "react-router";
import "./App.css";

function App() {
  let navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Secret Pulse</h1>
        <h2>Create anonymous surveys</h2>
        <p>Keep a pulse check on your people.</p>
      </div>
      <div className="flex flex-col">
        <button
          onClick={() => {
            navigate("/create");
          }}
        >
          Create Survey
        </button>
        <button
          onClick={() => {
            navigate("/test");
          }}
        >
          Create SurveyJS
        </button>
        <button
          onClick={() => {
            navigate("/results");
          }}
        >
          See Survey Results
        </button>
      </div>
    </>
  );
}

export default App;
