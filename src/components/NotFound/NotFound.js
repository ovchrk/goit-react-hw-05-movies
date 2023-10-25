import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      Please enter a valid request or go to <Link to="/">Trending list</Link> to
      select movies from the list.
    </div>
  );
};
