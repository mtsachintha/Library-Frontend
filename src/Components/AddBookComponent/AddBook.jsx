import React from 'react';
import './AddBook.css'
import read from '../Assets/reading.jpg';

const AddBook = () => {
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
        <form className="book-form">
          <div className="form-group">
            <label htmlFor="title" className="field-title">Book Title</label>
            <input type="text" id="title" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="author" className="field-title">Author</label>
            <input type="text" id="author" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="isbn" className="field-title">ISBN</label>
            <input type="text" id="isbn" className="input-field" />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
