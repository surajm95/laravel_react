import React from "react";
import {HashLink as Link} from 'react-router-hash-link';
// import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
  return (
    <div className="bg-banner">
        {/* <img src={BG} alt="bg" /> */}
      <div className="header">
        <img src="image/logo.png" alt="logo" className="logo" />

        <ul className="header-menu">
        <li>
          <Link smooth to="#home">Home</Link>
        </li>
        <li>
          <Link smooth to="#menu">Menu</Link>
        </li>
        <li>
          <Link smooth to="#team">Team</Link>
        </li>
        <li>
          <Link smooth to="#menugallery">Gallery</Link>
        </li>
        <li>
          <Link smooth to="#review">Review</Link>
        </li>
        <li>
          <Link smooth to="#article">Article</Link>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
