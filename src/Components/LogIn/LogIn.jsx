import React, { useState } from 'react';
import './LogIn.css';
import read from '../Assets/log.png';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Combined message state

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Save the token in localStorage
        localStorage.setItem('authToken', token);
        
        // Display success message
        setMessage('Login successful, token saved to local storage.');
        // Clear form fields
        setUsername('');
        setPassword('');
      } else {
        setMessage('Login failed. Please check your credentials.'); // Set error message
      }
    } catch (error) {
      setMessage('An error occurred during login.'); // Set error message
    }
  };

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
        <form className="lg-book-form" onSubmit={handleSubmit}>
          <div className="lg-form-group">
            <label htmlFor="username" className="lg-field-title">User Name</label>
            <input
              type="text"
              id="username"
              className="lg-input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="lg-form-group">
            <label htmlFor="password" className="lg-field-title">Password</label>
            <input
              type="password"
              id="password"
              className="lg-input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p id = 'log-message'className="message">{message}</p>
          <button id='submit-log' type="submit" className="lg-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
