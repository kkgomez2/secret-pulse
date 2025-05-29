const Create = () => {
  const addQuestion = () => {
    console.log("Question Added");
  };
  return (
    <>
      <div>Create</div>

      <div>
        <button
          onClick={() => {
            addQuestion();
          }}
        >
          Add question
        </button>
      </div>
    </>
  );
};

export default Create;
