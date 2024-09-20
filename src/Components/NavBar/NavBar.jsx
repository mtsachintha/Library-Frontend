import React, { useState } from 'react';
import './NavBar.css';
import logo from '../Assets/logo.png';
import user from '../Assets/profile.png';
import call from '../Assets/phone.png';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

export const NavBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = () => {
    if (searchKeyword.trim()) {
      let url = '';

      if (menu === 'art') {
        url = `/art/search/${searchKeyword}`;
      } else if (menu === 'artist') {
        url = `/artist/search/${searchKeyword}`;
      } else if (menu === 'supplies') {
        url = `/supplies/search/${searchKeyword}`;
      } else if (menu === 'sessions') {
        url = `/sessions/search/${searchKeyword}`;
      } else if (menu === 'seller') {
        url = `/seller/search/${searchKeyword}`;
      } else {
        url = `/search/${searchKeyword}`;
      }

      navigate(url); // Use navigate to programmatically change the route
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="navbar"> {/* Removed show/hide logic */}
      <div className='nav-logo'>
        <Link to={'/'}>
        <img src={logo} alt='logo' height={64} />
        </Link>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("art") }} className={menu === "art" ? "selected" : ""}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>View Books</Link>
        </li>
        <li onClick={() => { setMenu("artist") }} className={menu === "artist" ? "selected" : ""}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/add'}>Add a Book</Link>
        </li>
        <li onClick={() => { setMenu("seller") }} className={menu === "seller" ? "selected" : ""}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/remove'}>Remove a Book</Link>
        </li>
        <li onClick={() => { setMenu("supplies") }} className={menu === "supplies" ? "selected" : ""}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/reg'}>Register</Link>
        </li>
        <li onClick={() => { setMenu("sessions") }} className={menu === "sessions" ? "selected" : ""}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/log'}>Log In</Link>
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to={'/cart'}><img src={call} alt='cart' /></Link>
        <p>Tel: +94 11 234 5678</p>
        <Link to={'/login'}><img src={user} alt='user' /></Link>
      </div>
    </div>
  );
}
