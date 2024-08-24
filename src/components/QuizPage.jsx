import React, { useState, useEffect } from "react";
import "./QuizPage";

const QuizPage = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleAnswerClick = () => {
    nextQuestion();
  };

  if (quizCompleted) {
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>Thank you for participating.</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h2>{questions[currentQuestionIndex].question}</h2>
        <div>
          {questions[currentQuestionIndex].answers.map((answer, index) => (
            <button key={index} onClick={handleAnswerClick}>
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
