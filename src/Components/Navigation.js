import React, { useEffect } from 'react';
import Logo1 from '../images/logo-raster-hades.png';
import { Link } from 'react-router-dom';


function Navigation() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      const nav = document.querySelector(".nav");

      const headerRect = header.getBoundingClientRect();
      if (headerRect.bottom <= 0) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav">
      <div className="h">
        <img src={Logo1} alt="" className="h" />
      </div>
      <a href="#home">
        <div className="lista">Home</div>
      </a>
      <a href="#boons">
        <div className="lista">Boons</div>
      </a>
      <a href="#purchase">
        <div className="lista">Purchase</div>
      </a>
      <a href="#gallery">
        <div className="lista">Gallery</div>
      </a>
      <a href="#newsletter">
        <div className="lista">Newsletter</div>
      </a>
      <Link to='/about'>
      <div className="lista">About us</div>
      </Link>
    </div>
  );
}

export default Navigation;
