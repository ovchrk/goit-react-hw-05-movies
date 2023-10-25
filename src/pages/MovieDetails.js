import { fetchById } from 'api';
import { NotFound } from 'components/NotFound';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setError(null);
    async function fetchMovieById() {
      try {
        const movieDetails = await fetchById(id);
        setMovie({ ...movieDetails });
      } catch (error) {
        setError(error.message);
      }
    }
    fetchMovieById();
  }, [id]);

  let genres = movie?.genres;

  return (
    <>
      <Link to={backLinkLocationRef.current} className="btn">
        Go back
      </Link>
      {error && (
        <div className="error_box">
          Oops... {error} <NotFound></NotFound>
        </div>
      )}
      {movie && (
        <>
          <div className="movie_container">
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt={movie.title}
              width="300"
              className="poster"
            ></img>
            <div className="meta">
              <h2>
                {movie.title} ({Number.parseInt(movie.release_date)})
              </h2>
              <p className="caption">
                User score: {(movie.vote_average * 10).toFixed(2)}%
              </p>
              <h3>Overview</h3>
              <p className="caption">{movie.overview}</p>
              <h3>Genres</h3>
              <p className="caption">
                {genres && movie.genres.map(genre => genre.name).join(', ')}
              </p>
            </div>
          </div>
          <div className="additional">
            <h3 className="info__title">Additional information</h3>
            <ul className="info__list">
              <li className="info__item">
                <Link to="cast" className="info__link">
                  Cast
                </Link>
              </li>
              <li className="info__item">
                <Link to="reviews" className="info__link">
                  Reviews
                </Link>
              </li>
            </ul>
            <Suspense fallback={<div>...Loading</div>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
