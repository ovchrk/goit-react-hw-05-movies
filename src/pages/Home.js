import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from 'api';

const Home = ({ onMovieDetails }) => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const fetchedMovies = await fetchTrending();
        setTrending([...fetchedMovies]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendingMovies();
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
