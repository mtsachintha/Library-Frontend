import React from 'react';
import './BookGallery.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';


// Movie data placeholder
const movies = [
  { title: "127 Hours", placeholder: "https://via.placeholder.com/150" },
  { title: "Casino Royale", placeholder: "https://via.placeholder.com/150" },
  { title: "The Great Gatsby", placeholder: "https://via.placeholder.com/150" },
  { title: "Oblivion", placeholder: "https://via.placeholder.com/150" },
  { title: "UP", placeholder: "https://via.placeholder.com/150" },
  { title: "World War Z", placeholder: "https://via.placeholder.com/150" },
  { title: "Submarine", placeholder: "https://via.placeholder.com/150" },
  { title: "Hangover Part III", placeholder: "https://via.placeholder.com/150" },
  { title: "Pain & Gain", placeholder: "https://via.placeholder.com/150" },
  { title: "Man of Steel", placeholder: "https://via.placeholder.com/150" },
  { title: "Man on a Ledge", placeholder: "https://via.placeholder.com/150" },
  { title: "Rush", placeholder: "https://via.placeholder.com/150" },
  { title: "Elysium", placeholder: "https://via.placeholder.com/150" },
  { title: "Short Term 12", placeholder: "https://via.placeholder.com/150" },
  { title: "About Cherry", placeholder: "https://via.placeholder.com/150" },
  { title: "I'm So Excited", placeholder: "https://via.placeholder.com/150" },
];

const MovieGallery = () => {
  return (
    <div className="movie-gallery">
      {movies.map((movie, index) => (
        <div className="movie-item" key={index}>
          <img src={movie.placeholder} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieGallery;
