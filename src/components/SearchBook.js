import React, { useState } from "react";
import './SearchMovies.css'
import MovieCard from "./Moviecard";
import BookCard from "./BookCard";

function SearchBook() {
 //query hook 
 const [query, setQuery] = useState('')

 //total json
 const [fetchedData, setFetchedData] = useState({})

 // @2.results array 
 const [books, setBooks] = useState([])

 const searchBookFunc = async (e) => {
   
  e.preventDefault();
  console.log("submitting");
  // const API_KEY = process.env.REACT_APP_API_KEY
  const url =  `https://www.googleapis.com/books/v1/volumes?q=${query}`

  try {
      const response = await fetch(url)
      const data = await response.json()
      if(data!=null) 
        setFetchedData(data)

      setBooks(data.items)
  }
  catch (error) {
      console.err('error is', error);
  }

}




  return (
      
      <div>
            <form className="search-form" onSubmit={searchBookFunc}>
                <label className="label" htmlFor="query">Enter Book Name</label>
                <input className="input-movie" type="text" name="query"
                    placeholder="maybe Hamlet"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
                <button className="search-button" type="submit">Search</button>
            </form>

            <h2>No of pages: {fetchedData.page}  of {fetchedData.total_pages}</h2>

            <h2>Total No. of Resuts:{fetchedData.totalItems}</h2>

            <div className="card-list">
                {
                    books.filter(book => book.volumeInfo.imageLinks).map(book => (
                         <BookCard book={book} key={book.id} />
                    )
                    )
                }
            </div>
        </div>
  );
}

export default SearchBook;



