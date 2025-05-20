import "./App.css";

function App() {
  const create = () => {
    console.log("Route to creation page");
  };
  return (
    <>
      <div>
        <h1>Secret Pulse</h1>
        <h2>Create anonymous surveys</h2>
        <p>Keep a pulse check on your people.</p>
      </div>
      <button
        onClick={() => {
          create();
        }}
      >
        Create Survey
      </button>
    </>
  );
}

export default App;
