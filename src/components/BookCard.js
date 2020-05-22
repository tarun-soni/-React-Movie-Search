import React from 'react';
import '../App.css'
import './SearchMovies.css'
import ReadMoreAndLess from 'react-read-more-less';

import './SearchMovies.css'
function BookCard(props) {
    const { book } = props
    return (
        <>
            <div className="card" >
                <img className="card--img"
                    // items.imageLinks.smallThumbnail
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt="`book.title + ' poster'`"
               
                />

                <div className="card--content">
                    <h5 className="card--title">{book.volumeInfo.title}</h5>
                    <div className="release" > AUTHORS: <br /> {book.volumeInfo.authors} </div>

                    <p className="rating"><strong>RELEASE DATE: {book.volumeInfo.publishedDate}</strong></p>


                    <div className="card--desc">
                    {(book.volumeInfo.description != null) ?
                        <ReadMoreAndLess
                            className="read-more-content"
                            charLimit={120}
                            readMoreText="Read more"
                            readLessText="Read less"
                        >
                            {book.volumeInfo.description}
                        </ReadMoreAndLess>

                        : "no desc" }

                       
                    </div>
                </div>
            </div>

        </>

    );
}

export default BookCard;
