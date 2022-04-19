import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <div className='header-wrapper'>
        <nav className='nav-bar'>
          <Link className='nav-button' to="/">Home</Link>
          <Link className='nav-button' to="/experience">Experience</Link>
          <Link className='nav-button' to="/contact">Contact</Link>
        </nav>
      </div>
    );
  }