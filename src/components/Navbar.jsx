import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      const closeMenu = () => setIsMenuOpen(false);
      document.body.addEventListener('click', closeMenu);
      return () => document.body.removeEventListener('click', closeMenu);
    }
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Your Portfolio</Link>
      </div>
      
      {isMobile && (
        <button className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      )}
      
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <ul className="navbar-items">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
