import React from 'react';
import './Register.css'
import read from '../Assets/register.png';

const AddBook = () => {
  return (
    <div className="reg-container">
      <div className="reg-left-side">
        <img
          src={read} 
          alt="Book Cover" 
          className="reg-book-image"
        />
      </div>
      <div className="reg-right-side">
        <h2 className="reg-form-title">Welcome</h2>
        <form className="reg-book-form">
          <div className="reg-form-group">
            <label htmlFor="title" className="reg-field-title">User Name</label>
            <input type="text" id="title" className="reg-input-field" />
          </div>
          <div className="reg-form-group">
            <label htmlFor="author" className="reg-field-title">Password</label>
            <input type="text" id="author" className="reg-input-field" />
          </div>
          <div className="reg-form-group">
            <label htmlFor="isbn" className="reg-field-title">Confirm Password</label>
            <input type="text" id="isbn" className="reg-input-field" />
          </div>
          <button type="submit" className="reg-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
