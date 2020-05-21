import React from 'react';
import '../App.css'
import './SearchMovies.css'

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import ReadMoreAndLess from 'react-read-more-less';

import './SearchMovies.css'
function MovieCard(props) {
    const { movie } = props
    return (
        <>
            <div className="card" >
                <img className="card--img"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt="`movie.title + ' poster'`"
                />

                <div className="card--content">
                    <h5 className="card--title">{movie.title}</h5>
                    <p className= "release" > RELEASE DATE: <br/> {movie.release_date}</p>

                    <p className= "rating"><strong>RATING: {movie.vote_average}</strong></p>
                    <div className="card--desc">
                        <ReadMoreAndLess
                            className="read-more-content"
                            charLimit={120}
                            readMoreText="Read more"
                            readLessText="Read less"
                        >
                            {movie.overview}
                        </ReadMoreAndLess>
                        </div>
                </div>
            </div>

        </>

    );
}

export default MovieCard;
