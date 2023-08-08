import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetch = require('node-fetch');

    const url = `https://api.themoviedb.org/3/movie/${id}`;
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
      .then(json => setMovie({ ...json }))
      .catch(err => console.error('error:' + err));
  }, [id]);

  let genres = movie.genres;

  return (
    <>
      <Link to={backLinkLocationRef.current} className="btn">
        Go back
      </Link>
      <div className="movie_container">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
            alt={movie.title}
            width="300"
            className="poster"
          ></img>
        )}
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
  );
};

export default MovieDetails;
