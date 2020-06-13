import React from 'react';
import './App.css';
import BooksTab from './pages/BooksTab';
import MovieTab from './pages/MovieTab';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/movies" exact component={MovieTab} />
          <Route path="/books" exact component={BooksTab} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
