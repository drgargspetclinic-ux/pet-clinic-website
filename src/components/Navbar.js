import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px', // Reduced padding to avoid overflow
        backgroundColor: '#ffe4e1',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        boxSizing: 'border-box', // Ensures padding doesn't overflow
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        style={{ height: '45px', marginRight: '20px' }}
      />

      {/* Links */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap', // Allows wrapping on smaller screens
          maxWidth: '100%', // Prevents overflow
        }}
      >
        <NavLink label="Home" to="/" />
        <NavLink label="About Us" to="/about" />
        <NavLink label="Shop" to="/shop" />
        <NavLink label="Book Appointment" to="/appointment" />
      </div>
    </nav>
  );
};

// Link styling
const linkStyle = {
  color: '#333',
  textDecoration: 'none',
  fontSize: '1.05rem',
  fontWeight: '500',
  padding: '6px 10px',
  borderRadius: '5px',
  transition: 'background 0.3s',
};

const NavLink = ({ label, to }) => (
  <Link
    to={to}
    style={linkStyle}
    onMouseEnter={(e) => (e.target.style.background = '#ffb6b6')}
    onMouseLeave={(e) => (e.target.style.background = 'transparent')}
  >
    {label}
  </Link>
);

export default Navbar;
