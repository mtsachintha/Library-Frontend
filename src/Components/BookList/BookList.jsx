import React, { useState } from 'react';
import './BookList.css';

const BookList = () => {
  // List of books
  const [books, setBooks] = useState([
    { id: 1, title: 'A War and Peace', author: 'Alexandra Shixz', isbn: '9899901918' },
    { id: 2, title: 'B War and Peace', author: 'Alexandra Shixz', isbn: '9899901918' },
    { id: 3, title: 'A Tale of Two Cities', author: 'Charles Dickens', isbn: '9899901920' },
    { id: 4, title: 'B The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9899901921' },
    { id: 5, title: 'C War and Peace', author: 'Alexandra Shixz', isbn: '9899901918' }
  ]);

  // Function to handle book deletion
  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // Group books by the first letter of the title
  const groupedBooks = books.reduce((acc, book) => {
    const firstLetter = book.title[0].toUpperCase(); // Get the first letter
    if (!acc[firstLetter]) {
      acc[firstLetter] = []; // Create a new group if it doesn't exist
    }
    acc[firstLetter].push(book); // Add the book to the group
    return acc;
  }, {});

  return (
    <div className="book-list-container">
      {Object.keys(groupedBooks).sort().map((letter) => (
        <div key={letter} className="letter-section">
          <h3 className="letter-title">{letter}</h3>
          {groupedBooks[letter].map((book) => (
            <div className="book-item" key={book.id}>
              <div className="book-info">
                <p className="book-title">{book.title} by {book.author}</p>
                <p className="book-isbn">#{book.isbn}</p>
              </div>
              <button className="delete-btn" onClick={() => handleDelete(book.id)}>Delete</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BookList;
