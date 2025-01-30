import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header
      style={{
        width: '100%',
        padding: '10px 0',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <div
        style={{
          marginLeft: '100px',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          color: 'white',
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>iTravel</Link>
      </div>

      {/* Navbar Links */}
      <nav
        style={{
          display: 'flex',
          gap: '40px',
          marginRight: '100px',
        }}
      >
        <Link to="/explore" style={{ textDecoration: 'none', color: 'white' }}>DESTINATIONS</Link>
        <Link to="/form" style={{ textDecoration: 'none', color: 'white' }}>BUY A TICKET</Link>
        <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>ABOUT</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>CONTACT</Link>
      </nav>
    </header>
  );
}

export default Header;