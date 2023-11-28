import React, { useEffect, useState } from 'react';
import { getAllExercise } from "./http/http.service";

function Card() {
  const [exercisesValue, setExercise] = useState('');
  const [allExercises, setAllExercises] = useState([]);
  const [visibleExercises, setVisibleExercises] = useState(6); // Adjust the initial number of visible exercises
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getAllExercise();
      setAllExercises(data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredExercises = allExercises
    .filter((exercise) => {
      return exercise.name.toLowerCase().includes(exercisesValue.toLowerCase());
    })
    .slice(0, visibleExercises);

  function handleChange(event) {
    setExercise(event.target.value);
  }

  
  const handleClick = async () => {
    try {
      setIsLoading(true);
      const moreData = await getAllExercise(visibleExercises + 10);
      setAllExercises((prevExercises) => {
        const uniqueExercises = new Set([...prevExercises, ...moreData]);
        return Array.from(uniqueExercises);
      });
      setVisibleExercises((prevVisibleExercises) => prevVisibleExercises + 10);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  

  console.log('filteredExercises:', filteredExercises); // Add this line for debugging

  return (
    <div className='mt-[5%] px-10 w-screen'>
      <h1 className='text-3xl font-semibold'> Exercise List </h1>
      <input
        type='text'
        placeholder='Search by target, body part, or exercise'
        value={exercisesValue}
        className='border-2 mt-4 w-full rounded-md p-2'
        onChange={handleChange}
      />
     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
  {filteredExercises.map((exercise) => (
    <div key={exercise.id} className='rounded-md shadow-lg mt-11 flex flex-col px-4 '>
      <img src={exercise.gifUrl} alt='bodyposture' />
      <p className='font-semibold text-2xl mt-2 mb-2'>{exercise.name}</p>
      <p className='mt-2 mb-2 text-gray-500'>{exercise.target}</p>
      <p className='mb-3 text-gray-500'>{exercise.bodyPart}</p>
    </div>
  ))}
</div>

      {visibleExercises < allExercises.length && (
        <button
          className='mt-10 mb-10 px-4 py-2 bg-blue-600 text-white rounded-md hover:opacity-80'
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}

export default Card;
