import React, { useState } from "react";
import "./QuizPage";

const QuizPage = () => {
  const userPublicKey = "user-public-key-placeholder"; // Replace with actual user public key
  const quizId = "quiz-id-placeholder"; // Replace with actual quiz ID

  const questions = [
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        "Pacific Ocean",
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
      ],
      correctAnswer: 0,
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        "William Shakespeare",
        "George Bernard Shaw",
        "Oscar Wilde",
        "Jane Austen",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      answers: ["Oxygen", "Gold", "Osmium", "Oganesson"],
      correctAnswer: 0,
    },
    {
      question: "What is the currency of Japan?",
      answers: ["Yen", "Dollar", "Euro", "Won"],
      correctAnswer: 0,
    },
    {
      question: "Which planet is the closest to the Sun?",
      answers: ["Mercury", "Venus", "Earth", "Mars"],
      correctAnswer: 0,
    },
    {
      question: "Who is known as the 'Father of Computers'?",
      answers: [
        "Charles Babbage",
        "Alan Turing",
        "John von Neumann",
        "Bill Gates",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the hardest natural substance on Earth?",
      answers: ["Diamond", "Gold", "Iron", "Platinum"],
      correctAnswer: 0,
    },
    {
      question: "Which continent is known as the 'Dark Continent'?",
      answers: ["Africa", "Asia", "Australia", "South America"],
      correctAnswer: 0,
    },
    {
      question: "Which is the longest river in the world?",
      answers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      correctAnswer: 0,
    },
    {
      question: "Who discovered penicillin?",
      answers: [
        "Alexander Fleming",
        "Marie Curie",
        "Isaac Newton",
        "Louis Pasteur",
      ],
      correctAnswer: 0,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const nextQuestion = (answerStatus) => {
    setUserAnswers([
      ...userAnswers,
      { questionIndex: currentQuestionIndex, status: answerStatus },
    ]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleAnswerClick = (index) => {
    const answerStatus =
      index === questions[currentQuestionIndex].correctAnswer
        ? "correct"
        : "wrong";
    nextQuestion(answerStatus);
  };

  const handleSkipClick = () => {
    nextQuestion("unattempted");
  };

  if (quizCompleted) {
    const userSolvedQuiz = {
      userPublicKey,
      quizId,
      answers: userAnswers,
    };
    console.log(JSON.stringify(userSolvedQuiz, null, 2)); // Log the JSON object

    return (
      <div style={styles.container}>
        <h2>Quiz Completed!</h2>
        <p>Thank you for participating.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.questionContainer}>
        <h2>{questions[currentQuestionIndex].question}</h2>
        <div style={styles.answersContainer}>
          {questions[currentQuestionIndex].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              style={styles.answerButton}
            >
              {answer}
            </button>
          ))}
          <button onClick={handleSkipClick} style={styles.skipButton}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  questionContainer: {
    textAlign: "center",
  },
  answersContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  answerButton: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  skipButton: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "#d9534f", // Different color for the skip button
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginTop: "20px", // Add some distance from the options
    transition: "background-color 0.3s",
  },
};

export default QuizPage;
