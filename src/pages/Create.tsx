import { useState } from "react";

type Question = {
  id: number;
  question: string;
};

const Create = () => {
  const [questionForm, setQuestionForm] = useState<Array<Question>>([]);

  const addQuestion = () => {
    const newForm = questionForm;
    newForm.push({
      id: questionForm.length + 1,
      question: "What?",
    });
    setQuestionForm([...newForm]);
  };

  const exportForm = () => {
    alert(JSON.stringify(questionForm));
  }
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

        <section>
          {questionForm.map(({ id, question }, i) => {
            return (
              <div key={i}>
                <h2>Question {id}</h2>
                <p>{question}</p>
              </div>
            );
          })}
        </section>

        <section>

        <button
          onClick={() => {
            exportForm();
          }}
        >
          Export Survey
        </button>
        </section>
      </div>
    </>
  );
};

export default Create;
