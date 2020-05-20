import React from 'react';
import './Home.css'
import SearchMovies from '../components/SearchMovies';
function Home() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovies/>
    </div>
  );
}

export default Home;
