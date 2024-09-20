import React from 'react';
import './LogIn.css'
import read from '../Assets/log.png';

const LogIn = () => {
  return (
    <div className="lg-container">
      <div className="lg-left-side">
        <img
          src={read} 
          alt="Book Cover" 
          className="lg-book-image"
        />
      </div>
      <div className="lg-right-side">
        <h2 className="lg-form-title">Log In</h2>
        <form className="lg-book-form">
          <div className="lg-form-group">
            <label htmlFor="title" className="lg-field-title">User Name</label>
            <input type="text" id="title" className="lg-input-field" />
          </div>
          <div className="lg-form-group">
            <label htmlFor="author" className="lg-field-title">Password</label>
            <input type="text" id="author" className="lg-input-field" />
          </div>
          <button type="submit" className="lg-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
