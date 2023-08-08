import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = ({ onMovieDetails }) => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetch = require('node-fetch');

    const url = 'https://api.themoviedb.org/3/trending/all/day';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmY4ZmJiYzMwMTNlY2I1MDY0MGFmMDE0NDA1Nzc0YyIsInN1YiI6IjY0YjRlYTdiNjI5YjJjMDEzYzQzMDJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GHtJMZzPbE8SRwlwTEx3-peT33LPisCOv3lEOiFCJVM',
      },
    };
    fetch(url, options)
      .then(res => res.json())
      .then(json => setTrending([...json.results]))
      .catch(err => console.error('error:' + err));
  }, []);
  return (
    <div className="movie-list">
      {trending.map(({ id, title, name }) => {
        return (
          <Link
            key={id}
            to={`/movies/${id}`}
            state={{ from: location }}
            onClick={() => {
              onMovieDetails(id);
            }}
          >
            {title}
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
