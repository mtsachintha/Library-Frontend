import React, { useState, useEffect } from 'react';
import './BookList.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState({ text: '', type: '' }); // To display success/error messages

  useEffect(() => {
    // Fetch the book list from the API
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:8080/books');
        const data = await response.json();
        setBooks(data); // Store fetched books in state
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks(); // Call the function to fetch books on component mount
  }, []);

  // Function to handle book deletion
  const handleDelete = async (isbn) => {
    const authToken = localStorage.getItem('authToken'); // Get the token from localStorage

    if (!authToken) {
      setMessage({ text: 'Please log in', type: 'error' });
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/books/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${authToken}` // Include the auth token in the header
        },
        body: new URLSearchParams({ isbn })
      });

      if (response.status === 204) {
        // Success: Remove the book from the local state
        setBooks(books.filter(book => book.isbn !== isbn));
        setMessage({ text: 'Removed successfully', type: 'success' });
      } else if (response.status === 404) {
        setMessage({ text: 'Book not found', type: 'error' });
      } else {
        setMessage({ text: 'Failed to remove', type: 'error' });
      }
    } catch (error) {
      console.error('Error during deletion:', error);
      setMessage({ text: 'Failed to remove', type: 'error' });
    }
  };

  // Group books by the first letter of the title
  const groupedBooks = books.reduce((acc, book) => {
    const firstLetter = book.title[0].toUpperCase(); // Get the first letter of the title
    if (!acc[firstLetter]) {
      acc[firstLetter] = []; // Create a new group if it doesn't exist
    }
    acc[firstLetter].push(book); // Add the book to the group
    return acc;
  }, {});

  return (
    <div className="book-list-container">
      {message.text && (
        <p className={message.type === 'success' ? 'message-success' : 'message-error'}>
          {message.text}
        </p>
      )} {/* Display messages here */}
      
      {Object.keys(groupedBooks).sort().map((letter) => (
        <div key={letter} className="letter-section">
          <h3 className="letter-title">{letter}</h3>
          {groupedBooks[letter].map((book) => (
            <div className="book-item" key={book.id}>
              <div className="book-info">
                <p className="book-title">{book.title} by {book.author}</p>
                <p className="book-isbn">#{book.isbn}</p>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(book.isbn)} // Pass the book's ISBN
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BookList;
