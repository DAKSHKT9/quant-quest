import React, { useState } from "react";
import QuestionField from "./QuestionField";
import QuizField from "./QuizField";

const MakeQuizPage = () => {
  const [questions, setQuestions] = useState([
    {
      questionId: 1,
      quizId: "quiz123", 
      questionText: "",
      options: ["", "", "", ""], 
      correctOption: 0,
      explanation: "",
      pointsAwarded: 0,
    },
  ]);

  const [quizGenre, setQuizGenre] = useState(""); 
  const [quizDescription, setQuizDescription] = useState(""); 
  const [timeLimit, setTimeLimit] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleQuestionChange = (qIndex, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex][field] = value;
    setQuestions(updatedQuestions);
  };

  const validateQuizFields = () => {
    // Check if any of the quiz fields are empty
    if (!quizGenre || !quizDescription || !timeLimit) {
      setErrorMessage("All quiz fields must be filled.");
      return false;
    }
    return true;
  };

  const validateQuestions = () => {
    // Check if all questions and their respective fields are filled
    for (let question of questions) {
      if (!question.questionText || question.options.some(option => option === "") || question.correctOption === null || question.explanation === "" || question.pointsAwarded === 0) {
        setErrorMessage("All fields in each question must be filled.");
        return false;
      }
    }
    return true;
  };

  const addQuestion = () => {
    if (!validateQuizFields() || !validateQuestions()) return; // Validate before adding a new question
    setErrorMessage(""); // Clear any previous error message

    const newQuestion = {
      questionId: questions.length + 1,
      quizId: "quiz123", 
      questionText: "",
      options: ["", "", "", ""],
      correctOption: 0,
      explanation: "",
      pointsAwarded: 0,
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleSubmit = () => {
    if (!validateQuizFields() || !validateQuestions()) return; // Validate before submitting the quiz
    setErrorMessage(""); // Clear any previous error message

    const quizData = {
      genre: quizGenre,
      description: quizDescription,
      timeLimit: timeLimit,
      questions: questions,
    };
    console.log(JSON.stringify(quizData, null, 2));
    setQuestions([{
      questionId: 1,
      quizId: "quiz123", 
      questionText: "",
      options: ["", "", "", ""],
      correctOption: 0,
      explanation: "",
      pointsAwarded: 0,
    }]);
    setQuizGenre("");
    setQuizDescription("");
    setTimeLimit("");
  };

  return (
    <div style={styles.container}>
      <h2>Create Your Quiz</h2>

      {/* Display error message if any */}
      {errorMessage && <div style={styles.error}>{errorMessage}</div>}

      {/* Button container positioned absolutely */}
      <div style={styles.buttonContainer}>
        <button onClick={addQuestion} style={styles.button}>Add Question</button>
        <button onClick={handleSubmit} style={styles.button}>Submit Quiz</button>
      </div>

      {/* Two-column layout */}
      <div style={styles.flexContainer}>
        <div style={styles.leftColumn}>
          <QuizField
            quizGenre={quizGenre}
            setQuizGenre={setQuizGenre}
            quizDescription={quizDescription}
            setQuizDescription={setQuizDescription}
            timeLimit={timeLimit}
            setTimeLimit={setTimeLimit}
          />
        </div>

        <div style={styles.rightColumn}>
          {questions.map((question, qIndex) => (
            <div key={qIndex} style={{ marginBottom: "20px" }}>
              <QuestionField
                qIndex={qIndex}
                questionData={question}
                onChange={handleQuestionChange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative", // Ensure container is positioned relative for absolute positioning of buttonContainer
  },
  flexContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "60px", // Ensure space at bottom for buttons
  },
  leftColumn: {
    flex: "1",
    paddingRight: "10px",
  },
  rightColumn: {
    flex: "1",
    paddingLeft: "10px",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "20px",
  },
};

export default MakeQuizPage;
