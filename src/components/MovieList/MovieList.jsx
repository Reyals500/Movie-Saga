import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import Description from '../Details/Details';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  const history = useHistory()


  const handleDescription = (event) => {
    console.log("Description button clicked!!", event.target.id); 
    dispatch({type: 'FETCH_GENRES', payload: event.target.id})
    history.push('/description')
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
                <img data-testid="toDetails" onClick={handleDescription} id={movie.id} src={movie.poster} alt={movie.title}/>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
