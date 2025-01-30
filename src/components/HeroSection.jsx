import React from 'react';
import backgroundImage from './1327326.jpg'; 
import './HeroSection.css';

function HeroSection() {
  return (
    <div
      style={{
        height: '100vh', 
        width: '100vw', 
        margin: -15, 
        padding: 0, 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
      }}
    >
      <div
        style={{
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginBottom: '20px',
            fontFamily: "'Montserrat', sans-serif", 
            background: 'none', 
          }}
        >
          Travel In Morocco
        </h1>
        <button
          style={{
            padding: '8px 20px', 
            backgroundColor: '#FFD700', 
            color: '#333', 
            border: '2px solid #FFD700', 
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase',
            borderRadius: '50px', 
            letterSpacing: '2px', 
            transition: 'background-color 0.3s ease, color 0.3s ease', 
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'black'; 
            e.target.style.color = 'white'; 
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#FFD700'; 
            e.target.style.color = '#333'; 
          }}
        >
          Start Your Journey
        </button>
      </div>
    </div>
  );
}

export default HeroSection;