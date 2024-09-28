import React, { useState } from 'react';
import './Register.css';
import read from '../Assets/register.png';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(username == ""){
      setErrorMessage('Username cannot be Empty.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    const user = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setSuccessMessage('Registration successful!');
        setErrorMessage(''); // Clear any previous error message
        // Clear the form fields
        setUsername('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred during registration.');
    }
  };

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
        <form className="reg-book-form" onSubmit={handleSubmit}>
          <div className="reg-form-group">
            <label htmlFor="username" className="reg-field-title">User Name</label>
            <input
              type="text"
              id="username"
              className="reg-input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="reg-form-group">
            <label htmlFor="password" className="reg-field-title">Password</label>
            <input
              type="password"
              id="password"
              className="reg-input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="reg-form-group">
            <label htmlFor="confirm-password" className="reg-field-title">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              className="reg-input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p id="error-message" className="error-message">{errorMessage}</p>}
          {successMessage && <p id="success-message" className="success-message">{successMessage}</p>}
          <button
          id='reg-submit-btn'
           type="submit" className="reg-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
