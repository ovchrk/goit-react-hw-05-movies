import { Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { Container, Header, Link } from "./App.styled";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'))
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Loader = lazy(() => import('./Loader/Loader'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const [movieId, setMovieId] = useState('');
  const selectMovie = (id) => {
    setMovieId(id);
  }
 
  return (
     <Container>
      <Header>
       <nav>
        <Link to="/" end>
        Home
        </Link>
        <Link to="/movies">Movies</Link>
       </nav>
      </Header>
      <Suspense fallback={Loader}>
        <Routes>
      <Route path="/" element={<Home onMovieDetails={selectMovie}></Home>} />
        <Route path="/movies" element={<Movies onMovieDetails={selectMovie} />} />
        <Route path="/movies/:movieId" element={<MovieDetails id={movieId}></MovieDetails>}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
      </Route>
        
      <Route path="*" element={<Home />} />
      </Routes>
      </Suspense>
    </Container>
  );
};
