// http.service.js

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: { limit: '10' },
  headers: {
    'X-RapidAPI-Key': 'cd5ab49dabmshfbc2b89df8be970p1029cejsn9ac539a73f76',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export async function getAllExercise(limit = 10) {
  try {
    const response = await axios.request({ ...options, params: { limit } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
