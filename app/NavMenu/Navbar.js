"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import "../css/login.css"
import "../css/nav.css"

export default function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showServicesList, setShowServicesList] = useState(false); // New state for Services list
const [navbarActive, setNavbarActive] = useState(false); // New state for navbar background

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const toggleServicesList = () => {
    setShowServicesList(!showServicesList);
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 0) {
        setNavbarActive(true);
      } else {
        setNavbarActive(false);
      }
    }
  };
  

  // Listen to scroll events
  
  

  return (
    <header className="header">
      <a href="#" className="logo">
        TrustSign
      </a>

      <input
        type="checkbox"
        id="check"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="check" className="icons">
        <Hamburger className="bx bx-menu" id="menu-icon"></Hamburger>
        <i className="bx bx-x" id="close-icon"></i>
      </label>

      <nav className="navbar">
        <a href="#" className="nav-item nav-items"  style={{ '--i': 0 }}>
          Home
        </a>
        <a href="#" className="nav-item nav-items" style={{ '--i': 1 }}>
          About
        </a>
        <a href="#" className="nav-item nav-items" style={{ '--i': 2 }}>
          Kiosk
        </a>
        <a
          href="#"
          className="nav-item nav-items "
          style={{ '--i': 3 }}
          onMouseEnter={toggleServicesList} 
          onMouseLeave={toggleServicesList} 
        >
          Cloud
          {showServicesList && (
    <div className="services-list" style={{display:"flex" ,margin:"25px"}}>
      <div className="service-category" >
        <h3>Cloud </h3>
        <ul>
          <li><a href="#">cloud App</a></li>
          <li><a href="#">trustdine App</a></li>
         
        </ul>
      </div>
      <div className="service-category">
        <h3>trustdine </h3>
        <ul>
          <li><a href="#">Cloud web</a></li>
          <li><a href="#">trustdine web</a></li>
          
        </ul>
      </div>
      <div className="service-category">
        <h3>USBKiosk </h3>
        <ul>
          <li><Link href="/project">offline</Link></li>
          <li><a href="#">kisok usb</a></li>
          <li><a href="#">TrustSign</a></li>
        </ul>
      </div>
    </div>
  )}
</a>
        <a href="#" className="nav-item nav-items" style={{ '--i': 4 }}>
          Contact
        </a>
        <button href="#" className="nav-item item-col" onClick={toggleLoginForm} style={{ '--i': 5 }}>
          Login
        </button>
      </nav>
      {showLoginForm && (
        <div className="wrapper ">
             <form action="#" className="login-form">
            <h2 className='login-col'>Login</h2>
            <div className="input-field">
              <input type="text" required />
              <label>Enter your email</label>
            </div>
            <div className="input-field">
              <input type="password" required />
              <label>Enter your password</label>
            </div>
            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                <p>Remember me</p>
              </label>
              <a href="#">Forgot password</a>
            </div>
            <button type="submit">Log In</button>
            <div className="register">
              <p>
                Don have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      )}
    </header>
  );
}
