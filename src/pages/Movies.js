import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchByName } from 'api';

const Movies = ({ onMovieDetails }) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState();
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
    setError(null);
  };

  useEffect(() => {
    if (searchQuery !== '') {
      async function fetchMoviesByName() {
        try {
          const fetchedMovies = await fetchByName(searchQuery);
          setResults([...fetchedMovies]);
        } catch (error) {
          console.log(error);
          setError(error);
        }
      }
      fetchMoviesByName();
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
        {error && <div>Error! Please enter a valid request!</div>}
      </div>
    </div>
  );
};

export default Movies;
