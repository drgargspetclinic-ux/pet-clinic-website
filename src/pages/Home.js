import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import petRunning from '../assets/pet_running.jpg';
import logo from '../assets/logo.png';

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${petRunning})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '0 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      ></div>

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        style={{
          position: 'absolute',
          top: '20px',
          right: '40px',
          height: '60px',
          zIndex: 999,
        }}
      />

      {/* Main content */}
      <div
        style={{
          zIndex: 2,
          paddingTop: '100px',
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1s ease',
          marginTop: '120px',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>🐾 Pawfect Care</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
          Your pet's health and happiness is our priority!
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <button
            onClick={() => navigate('/appointment')}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              backgroundColor: '#ff7f50',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            Book Appointment
          </button>

          <button
            onClick={() => navigate('/shop')}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              backgroundColor: '#1e90ff',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            Visit Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
