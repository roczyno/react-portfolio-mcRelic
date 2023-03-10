import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);

    return () => (window.onscroll = null);
  };

 
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbarWrapper">
        <ul className="navList">
          <li className="navListItem">
            <a href="#home">Home</a>
          </li>
          <li className="navListItem">
            <a href="#about">About</a>
          </li>
          <li className="navListItem">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="navListItem">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="navListItem">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
