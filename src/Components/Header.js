import React from 'react';
import Video from "../videos/Hades_12-13-2022_23-7-44-858.mp4";
import Slika from "../images//hades(dork-green).png";

function Header() {
  return (
    <div>
      <a name="home">
        <div className="header">
          <div className="vidcontainer">
            <video autoPlay muted loop>
              <source src={Video} />
            </video>
          </div>
          <div className="overhead">
            <div className="logo-container">
              <img src={Slika} alt="" id="logo1" className="logoi" />
            </div>
            <h2>Webpage by Sara Bartulović</h2>
            <p className="htxt">
              Venture through the underworld and fight your way into the outside world, <br />
              hacking and slashing anyone who comes in your path
            </p>
            <a href="#main" className="link1">
              <div className="arrow"></div>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Header;
