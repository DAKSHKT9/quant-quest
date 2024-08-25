import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Quizes from "./components/Quizes";
import MakeQuizPage from "./components/MakeQuizPage";
import QuizPage from "./components/QuizPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: "70px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Quizes />} />
          <Route path="/create" element={<MakeQuizPage />} />
          <Route path="/quiz" element={<QuizPage />} />{" "}
          {/* Route for QuizPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
