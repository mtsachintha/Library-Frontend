import React, { useState, useEffect } from 'react';
import './AddBook.css';
import read from '../Assets/reading.jpg';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if token is present in localStorage
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log('Auth Token:', token); // Log the token
    if (token) {
      setIsLoggedIn(true);
    } else {
      setErrorMessage('Please log in to add a book.');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const book = {
      title,
      author,
      isbn,
    };

    const token = localStorage.getItem('authToken'); // Retrieve token from local storage

    if (!token) {
      setErrorMessage('You are not logged in. Please log in to add a book.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/books/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(book),
      });

      if (response.ok) {
        // Handle successful submission
        setSuccessMessage('Book added successfully!');
        setErrorMessage(''); // Clear any previous error message

        // Clear form fields
        setTitle('');
        setAuthor('');
        setIsbn('');
      } else {
        // Handle errors
        setErrorMessage('Failed to add book. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('An error occurred while adding the book.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container">
      <div className="left-side">
        <img
          src={read}
          alt="Book Cover"
          className="book-image"
        />
      </div>
      <div className="right-side">
        <h2 className="form-title">Add Book</h2>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="field-title">Book Title</label>
            <input
              type="text"
              id="title"
              className="input-field"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              disabled={!isLoggedIn} // Disable input if not logged in
            />
          </div>
          <div className="form-group">
            <label htmlFor="author" className="field-title">Author</label>
            <input
              type="text"
              id="author"
              className="input-field"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              disabled={!isLoggedIn} // Disable input if not logged in
            />
          </div>
          <div className="form-group">
            <label htmlFor="isbn" className="field-title">ISBN</label>
            <input
              type="text"
              id="isbn"
              className="input-field"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              required
              disabled={!isLoggedIn} // Disable input if not logged in
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <button type="submit" className="submit-btn" disabled={!isLoggedIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;