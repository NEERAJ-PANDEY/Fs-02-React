// LandingPage.js
import React, { useState } from 'react';

const LandingPage = ({ onStartQuiz }) => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [numQuestions, setNumQuestions] = useState(10);

  const handleStartQuiz = () => {
    onStartQuiz(category, difficulty, numQuestions);
  };

  return (
    <div className='bg-gray-900 w-screen pb-16 pt-14 text-white flex flex-col items-center' >
      <h1 className='text-4xl text-center'>Welcome to OPEN TRIVIA QUIZ <br/> GAME</h1>
    <div className='border-[1px] rounded-md text-center border-gray-500   mt-10 w-[90%] md:w-[60%]'>
          <h1 className='border-b-[1px] border-gray-500  text-xl py-2 text-gray-400 font-semibold'>Select Questions</h1>
      <div className='w-full mb-8 mt-8 text-start pl-7' >
        <label htmlFor="category"  className='text-xl '>Categories</label>
         <br />
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        className='w-[95%]  border-[1px] mt-3 border-gray-400 rounded-md text-xl py-2 text-gray-400 bg-gray-900'>
          {/* Add your category options here */}
          <option value="9">General Knowledge</option>
          <option value="11">Movies</option>
          <option value="23">Science & Nature</option>
          <option value="18">History</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Geography</option>
          {/* Add more categories as needed */}
        </select>
      </div>
    
      <div className='w-full mb-8 mt-8 text-start pl-7'>
        <label htmlFor="numQuestions"  className='text-xl '>Questions</label>
        <br/>
        <input
          type="number"
          id="numQuestions"
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value)}
          className='w-[95%] bg-gray-900 border-[1px] mt-3 border-gray-400 rounded-md text-xl py-2 text-gray-400'/>
      </div>
      <div className='w-full mb-8 mt-8 text-start pl-7'>
        <label htmlFor="difficulty" className='text-xl '>Difficulty</label>
        <br/>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className='w-[95%] bg-gray-900 border-[1px] mt-3 border-gray-400 rounded-md text-xl py-2 text-gray-400'>
          {/* Add your difficulty options here */}
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button onClick={handleStartQuiz} className='border-t-[1px] w-full border-gray-500  text-xl py-2 text-gray-400 font-semibold text-start pl-8'> <p className='p-2 bg-blue-700 w-fit text-white rounded-md px-3'>Start </p> </button>
      </div>
    </div>
  );
};

export default LandingPage;
