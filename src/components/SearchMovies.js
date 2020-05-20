import React from "react";
import './SearchMovies.css'
import { mockComponent } from "react-dom/test-utils";
export default function SearchMovies() {

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        const query = " Jurassic Park"
        const API_KEY = ""
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`
        const response = await fetch(url)
        try {
            const movieData = await response.json()
            console.log('Movie Data fetched is', movieData)
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
                    placeholder="maybe Jurassic Park" />
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    )
}