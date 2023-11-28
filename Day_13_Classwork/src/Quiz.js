// Quiz.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = ({ category, difficulty, numQuestions }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    fetchQuestions();
  }, [category, difficulty, numQuestions]);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
      );

      const shuffledQuestions = response.data.results.map((question) => ({
        ...question,
        answers: shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
      }));

      setQuestions(shuffledQuestions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleAnswerClick = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestion].correct_answer;
    if (selectedAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimer(10); // Change timer to 10 seconds for each question
    } else {
      // End of quiz
      alert(`Quiz completed! Your score is ${score}`);
      // You can add logic here to restart the quiz or exit the app
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 5000);

      return () => clearInterval(interval);
    } else {
      // Time's up, move to the next question
      nextQuestion();
    }
  }, [timer]);

  return (
    <div className='bg-gray-900 w-screen md:h-screen pb-16 pt-14 text-white flex flex-col items-center' >
      <h1 className='text-4xl text-center font-semibold'>Welcome to OPEN TRIVIA QUIZ <br/> GAME</h1>
    <div className='border-[1px] rounded-md text-center border-gray-500   mt-10 w-[90%] md:w-[60%]'>
          <h1 className='border-b-[1px] border-gray-500  text-xl py-2 text-gray-400 font-semibold'>  <p>
        Question {currentQuestion + 1} of {questions.length}
      </p></h1>
     
     <div className='flex justify-around text-xl text-gray-400 border-b-[1px] border-gray-400 py-2'>
      <p>Score: {score}</p>
      <p>Time left: {timer} seconds</p>
      </div>
      <h2 className='text-xl text-gray-500 py-4 px-3'>{questions[currentQuestion]?.question}</h2>
      <div>
        {questions[currentQuestion]?.answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswerClick(answer)} className='text-xl border-[1px] ml-4 p-2 text-gray-400 border-gray-400 rounded-md m-3'>
            {answer}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Quiz;
