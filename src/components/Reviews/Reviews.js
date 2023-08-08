import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetch = require('node-fetch');

    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
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
      .then(json => setReviews([...json.results]))
      .catch(err => console.error('error:' + err));
  }, [movieId]);
  console.log(reviews);
  return (
    <div>
      {reviews.length < 1 && <div>There are no reviews on this movie.</div>}
      {reviews.map(review => {
        return (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <p className="caption">{review.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
