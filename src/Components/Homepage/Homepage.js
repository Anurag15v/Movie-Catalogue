import React, { useState } from 'react'
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieList from '../MovieList/MovieList';
import './Homepage.css'
function Homepage() {
    const [searchinput, setsearchinput] = useState("");
    const [suggestionlist, setsuggestionlist] = useState([]);
    const [selectsuggestion, setselectsuggestion] = useState(false)
    const [searchresult, setsearchresult] = useState("")
    const OmbdMovieSuggestion = async () => {
        const res = await fetch('http://www.omdbapi.com/?s=' + searchinput + '&apikey=' + process.env.React_App_Ombd_Key + '&')
        const data = await res.json();
        setsuggestionlist(data.Search)
    }
    const getdetails = async (id) => {
        const res = await fetch('http://www.omdbapi.com/?i=' + id + '&apikey=' + process.env.React_App_Ombd_Key + '&')
        const data = await res.json();
        setsearchresult(data);
        setsuggestionlist([])
        setselectsuggestion(true)
    }
    const clear = () => {
        setsearchinput("")
        setsuggestionlist([])
        setsearchresult("")
    }
    return (
        <div className="homepage">
            <Header />
            <div className="text-container">
                <div>
                    <h1 className='text'>Unlimited movies, TV shows and more.</h1>
                    <h3 className='text2'>Watch movie details anywhere.</h3>
                    <span className='deleteicon'>
                        <input value={searchinput} onChange={(e) => { setsearchinput(e.target.value); OmbdMovieSuggestion(); setselectsuggestion(false) }} className='search_bar' placeholder='Search for a movie or Tv show...' />
                        <span onClick={clear}>x</span>
                    </span>
                    <ul id="moviesuggestionlist">
                        {!selectsuggestion && suggestionlist !== undefined && suggestionlist.map((movie, index) => {
                            return <li onClick={() => { setsearchinput(movie.Title); getdetails(movie.imdbID) }} className='li_options' value={movie.Title} key={movie.imdbID}>{movie.Title}</li>
                        }
                        )}
                    </ul>

                </div>
            </div>
            {searchresult !== "" ? <MovieDetails data={searchresult} /> : null}
            <MovieList />
        </div>
    )
}

export default Homepage