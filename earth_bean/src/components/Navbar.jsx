import React, { useState, useEffect } from 'react';
import './componentCss/Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? 'navbar transparent' : 'navbar'}>
      Earth & Bean
    </nav>
  );
}

export default Navbar;
