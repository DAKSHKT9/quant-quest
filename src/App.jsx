import React from "react";
import QuizPage from "./components/QuizPage"; // Assuming the QuizPage component is in the same directory

function App() {
  const questions = [
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        "Pacific Ocean",
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
      ],
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        "William Shakespeare",
        "George Bernard Shaw",
        "Oscar Wilde",
        "Jane Austen",
      ],
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      answers: ["Oxygen", "Gold", "Osmium", "Oganesson"],
    },
    {
      question: "What is the currency of Japan?",
      answers: ["Yen", "Dollar", "Euro", "Won"],
    },
    {
      question: "Which planet is the closest to the Sun?",
      answers: ["Mercury", "Venus", "Earth", "Mars"],
    },
    {
      question: "Who is known as the 'Father of Computers'?",
      answers: [
        "Charles Babbage",
        "Alan Turing",
        "John von Neumann",
        "Bill Gates",
      ],
    },
    {
      question: "What is the hardest natural substance on Earth?",
      answers: ["Diamond", "Gold", "Iron", "Platinum"],
    },
    {
      question: "Which continent is known as the 'Dark Continent'?",
      answers: ["Africa", "Asia", "Australia", "South America"],
    },
    {
      question: "Which is the longest river in the world?",
      answers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    },
    {
      question: "Who discovered penicillin?",
      answers: [
        "Alexander Fleming",
        "Marie Curie",
        "Isaac Newton",
        "Louis Pasteur",
      ],
    },
  ];

  return (
    <div className="App">
      <QuizPage questions={questions} />
    </div>
  );
}

export default App;
