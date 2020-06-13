import React from 'react';
import './Common.css'
import SearchMovies from '../components/SearchMovies';
function MovieTab() {
  return (
    <div className="container">
      <h1 className="title"> Search Movies</h1>
      <SearchMovies/>
    </div>
  );
}

export default MovieTab;
