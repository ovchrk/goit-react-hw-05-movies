import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const config = {
  accept: 'application/json',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmY4ZmJiYzMwMTNlY2I1MDY0MGFmMDE0NDA1Nzc0YyIsInN1YiI6IjY0YjRlYTdiNjI5YjJjMDEzYzQzMDJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GHtJMZzPbE8SRwlwTEx3-peT33LPisCOv3lEOiFCJVM`,
  },
};

export const fetchByName = async searchQuery => {
  const response = await axios.get(`search/movie?query=${searchQuery}`, config);
  return response.data.results;
};

export const fetchTrending = async () => {
  const response = await axios.get('trending/all/day', config);
  return response.data.results;
};

export const fetchById = async id => {
  const response = await axios.get(`movie/${id}`, config);
  return response.data;
};
