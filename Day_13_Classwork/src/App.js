// App.js
import React, { useState } from 'react';
import Quiz from './Quiz';
import LandingPage from './LandingPage';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizParams, setQuizParams] = useState({
    category: '',
    difficulty: '',
    numQuestions: 10,
  });

  const handleStartQuiz = (category, difficulty, numQuestions) => {
    setQuizParams({
      category,
      difficulty,
      numQuestions: parseInt(numQuestions, 10),
    });
    setQuizStarted(true);
  };

  return (
    <div className="App">
      {quizStarted ? (
        <Quiz {...quizParams} />
      ) : (
        <LandingPage onStartQuiz={handleStartQuiz} />
      )}
    </div>
  );
}

export default App;
