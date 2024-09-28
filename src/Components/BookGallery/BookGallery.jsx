import React, { useEffect, useState } from 'react';
import './BookGallery.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const BookGallery = () => {
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch the book list from the API
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:8080/books');

        // Check if the response is ok
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Check if the fetched data is empty
        if (data.length === 0) {
          setErrorMessage('No books available to display');
        } else {
          setBooks(data); // Set the fetched book data
          setErrorMessage(''); // Clear any previous error message
        }
      } catch (error) {
        console.error('Error fetching books:', error);
        setErrorMessage('No books available to display'); // Set error message
      }
    };

    fetchBooks(); // Call the function to fetch books
  }, []);

  return (
    <div className="movie-gallery">
      
      {/* If there are books, display them, otherwise show the no books message */}
      {books.length > 0 ? (
        books.map((book, index) => (
          <div className="movie-item" key={index}>
            <img src="https://via.placeholder.com/150" alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))
      ) : (
        <p className="no-books-message">No books available to display</p>
      )}
    </div>
  );
};

export default BookGallery;
