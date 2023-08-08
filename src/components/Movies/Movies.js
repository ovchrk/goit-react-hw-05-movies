import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = ({ onMovieDetails }) => {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.elements.query.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  useEffect(() => {
    if (searchQuery !== '') {
      const fetch = require('node-fetch');

      const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`;
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
        .then(json => setResults([...json.results]))
        .catch(err => console.error('error:' + err));
    }
  }, [searchQuery]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movie name"
        ></input>
        <button type="submit">Search</button>
      </form>
      <div className="movie-list">
        {results.map(({ id, original_title }) => {
          return (
            <Link
              key={id}
              to={`/movies/${id}`}
              state={{ from: location }}
              onClick={() => {
                onMovieDetails(id);
              }}
            >
              {original_title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
