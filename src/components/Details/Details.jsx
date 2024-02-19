import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Description() {
    const history = useHistory()
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies)
    const genres = useSelector(store => store.genres)
    console.log("genres", genres)
    // console.log("movies", movies)
    const [detailsArray, setDetailsArray] = useState([])
    const handleClick = () => {
        history.push('/')
    }
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        
      }, []);

    return(
        <main>
            <h1>Details</h1>

            <div data-testid="movieDetails">
                {genres.map(genre => {
                    return(
                     <div key={genre.id}>
                     <img src={genre.poster}/>
                        <li>{genre.title}</li>
                        <li>Genres:{genre.string_agg}</li>
                        <li >Details: {genre.description}</li>                        
                </div>
            )
        })}

            </div>
            <button data-testid="toList" onClick={handleClick}>Back</button>
        </main>
    )
}

export default Description