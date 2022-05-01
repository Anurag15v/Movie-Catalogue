import React, { useEffect, useState } from 'react'
import "./MovieList.css"
function MovieList() {
    const [searchresult, setsearchresult] = useState([])
    const id = ['tt0111161', 'tt3643544', 'tt0852721', 'tt5618938', 'tt11621960', 'tt10985096', 'tt1341779', 'tt1843866', 'tt0458339', 'tt8027322', 'tt0454876', 'tt0022867', 'tt0039503', 'tt1399103', 'tt0081398', 'tt4703660', 'tt2126355', 'tt2103188', 'tt4154756', 'tt0372784'];
    useEffect(() => {
        var datalist = []
        id.forEach((EachId, index) => {
            fetch('http://www.omdbapi.com/?i=' + EachId + '&apikey=' + process.env.React_App_Ombd_Key + '&').then(res => res.json()).then(data => {
                datalist.push(data)
                if (index === 19) {
                    setsearchresult(datalist);
                }
            })
        })
    }, [])
    return (
        <div>
            <div className='movie_list'>
                {searchresult.length !== 0 && searchresult.map((movie, index) => {
                    return <div onClick={() => window.location.href = "/movie/" + movie.imdbID} key={index} className='poster_div movie_img'>
                        <img alt="poster" className='search_poster' src={movie.Poster} />
                        <div className='movie_title'><h3>{movie.Title}</h3>
                            <p>{movie.Year} {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}</p></div>
                    </div>
                })}
            </div>
        </div >
    )
}

export default MovieList