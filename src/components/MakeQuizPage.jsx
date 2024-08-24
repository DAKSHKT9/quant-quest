import React, { useState } from "react";
import QuestionField from "./QuestionField";

const MakeQuizPage = () => {
  const [questions, setQuestions] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      questionId: index + 1,
      quizId: "quiz123", // This can be dynamically generated or passed as a prop
      questionText: "",
      options: ["", "", "", ""], // Assuming 4 options by default
      correctOption: 0,
      explanation: "",
      pointsAwarded: 0,
    }))
  );

  const handleQuestionChange = (qIndex, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    console.log(JSON.stringify(questions, null, 2));
    // This JSON can later be sent to an API endpoint to be stored in a database
  };

  return (
    <div>
      <h2>Create Your Quiz</h2>
      {questions.map((question, qIndex) => (
        <QuestionField
          key={qIndex}
          qIndex={qIndex}
          questionData={question}
          onChange={handleQuestionChange}
        />
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default MakeQuizPage;
