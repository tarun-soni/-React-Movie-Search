import React, { useState } from "react";
import './SearchMovies.css'
import MovieCard from "./Moviecard";
require('dotenv').config()
async function nextPage(){
    console.log("in next");
}
async function previousPage(){
    console.log("in prev");
}

export default function SearchMovies() {
    //query hook 
    const [query, setQuery] = useState('')

    //total json
    const [fetchedData, setFetchedData] = useState({})

    // @2.results array 
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
            setFetchedData(data)
            setMovies(data.results)
        }
        catch (error) {
            console.err('error is', error);
        }

        nextPage()

        previousPage()
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

            {/* <h3>shows  results : {fetchedData.results.length}</h3> */}
            <h2>No of pages: {fetchedData.page}  of {fetchedData.total_pages}</h2>
            
            <h2>No of Totalresults: {fetchedData.total_results}</h2>

            <div className="card-list">
                {
                    movies.filter(movie => movie.poster_path).map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    )
                    )
                }
            </div>
        </div>
    )
}
