import React, { useState } from "react";
import './SearchMovies.css'
require('dotenv').config()

export default function SearchMovies() {

    //query hook 
    const [query, setQuery] = useState('')

    const [movies, setMovies] = useState([])
    //onSubmit function of form
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        const API_KEY = process.env.REACT_APP_API_KEY

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`

        try {
            const response = await fetch(url)
            const data = await response.json()
            setMovies(data.results)
        }
        catch (error) {
            console.err('error is', error)
        }

    }
    return (

        <div>
            <form className="search-form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input-movie" type="text" name="query"
                    placeholder="maybe Jurassic Park"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
                <button className="search-button" type="submit">Search</button>
            </form>

            <div className="card-list">
                {
                    movies.filter(movie => movie.poster_path).map(movie =>                        
                    (
                        <div className="card" key={movie.id}>
                            <img className="card--img" 
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt="`movie.title + ' poster'`"
                            />
                            
                        <div className="card--content">
                            <h5 className="card--title">{movie.title}</h5>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card--desc">{movie.overview}</p>
                        </div>
                        </div>                    
                    )
                )
                }
            </div>
        </div>
    )
}