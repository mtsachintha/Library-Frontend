import React from 'react';
import './TopBanner.css'; // Import the CSS for styling
import banner from '../Assets/banner.png';


export const TopBanner = ({ imageUrl, altText }) => {
  return (
    <div className="banner">
      <img src={banner} alt={altText} className="banner-image" />
    </div>
  );
};