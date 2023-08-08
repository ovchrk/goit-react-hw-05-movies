import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetch = require('node-fetch');

    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
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
      .then(json => setCast([...json.cast.splice(0, 8)]))
      .catch(err => console.error('error:' + err));
  }, [movieId]);

  return (
    <div>
      <ul className="cast__list">
        {cast.map(actor => {
          return (
            <li key={actor.id} className="cast__item">
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w780${actor.profile_path}`}
                  alt={actor.name}
                  width="80"
                ></img>
              )}
              <h4>{actor.name}</h4>
              <p className="caption">Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
