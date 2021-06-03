import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center header-scrolled">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto"><a href="index.html">Bienvenue Sur mon site<span>.</span></a></h1>
        <Nav />
        <a href="#about" className="get-started-btn scrollto">Get Started</a>
      </div>
    </header>
  )
}

export default Header