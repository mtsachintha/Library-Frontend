import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Create a root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use root.render to render your application
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// Measuring performance in your app (optional)
reportWebVitals();
