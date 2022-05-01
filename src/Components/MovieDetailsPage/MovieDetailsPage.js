import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Header from '../Header/Header';
import "./MovieDetailsPage.css"
function MovieDetailsPage() {
    const { id } = useParams();
    const [movie, setmovie] = useState([])
    useEffect(() => {
        fetch('http://www.omdbapi.com/?i=' + id + '&apikey=' + process.env.React_App_Ombd_Key + '&').then(res => res.json()).then(data => {
            setmovie(data);
        })
    }, [])
    return (
        <div className='homepage'>
            <Header />
            <div className='movie_details poster_movie'>
                {movie.length !== 0 ? <>
                    <div className='poster_div'>
                        <img alt="poster" className='search_poster' src={movie.Poster} /></div>
                    <div className='details'><h2>{movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)} : {movie.Title}</h2>
                        <h2>Genre: {movie.Genre}</h2>
                        <h2>Language : {movie.Language}</h2>
                        <h2>Release : {movie.Released}</h2>
                        <h2>{movie.Actors !== "N/A" ? 'Actors :' + movie.Actors : null}</h2>
                        <h2>{movie.Awards !== "N/A" ? 'Awards :' + movie.Awards : null}</h2>
                        <h2>{movie.Country !== "N/A" ? 'Country :' + movie.Country : null}</h2>
                        <h2>{movie.Director !== "N/A" ? 'Awards :' + movie.Director : null}</h2>
                        <h2>{movie.imdbRating !== "N/A" ? 'Imdb Rating :' + movie.imdbRating : null}</h2>
                        <h2>{movie.imdVotes !== "N/A" ? 'Imdb Votes :' + movie.imdbVotes : null}</h2>
                    </div> </> : null}
                <details>
                    <summary>Plot</summary>
                    <p>{movie.Plot}</p>
                </details>
            </div>

        </div>
    )
}

export default MovieDetailsPage