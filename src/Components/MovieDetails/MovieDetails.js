import React from 'react'
import "./MovieDetails.css"
function MovieDetails(props) {
    return (
        <div className='movie_details'>
            <div className='poster_div'><img alt="poster" className='search_poster' src={props.data.Poster} /></div>
            <div className='details'><h2>{props.data.Type.charAt(0).toUpperCase() + props.data.Type.slice(1)} : {props.data.Title}</h2>
                <h2>Genre: {props.data.Genre}</h2>
                <h2>Language : {props.data.Language}</h2>
                <h2>Release : {props.data.Released}</h2>
                <h2>{props.data.Actors !== "N/A" ? 'Actors :' + props.data.Actors : null}</h2>
                <h2>{props.data.Awards !== "N/A" ? 'Awards :' + props.data.Awards : null}</h2>
                <h2>Director: {props.data.Director}</h2>
                <a className='link' href={"/movie/" + props.data.imdbID}>...more</a>
            </div>
        </div>
    )
}

export default MovieDetails