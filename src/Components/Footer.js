import React from 'react';
import Slika from "../images/Supergiant_games_logo.jpg";

function Footer () {
  return (
    <div className="footer">
      <div className="subfooter">
        <img src={Slika} className="footimg" alt="" />
        <div className="subsub">
          <p>
            Website: <a href="http://www.supergiantgames.com">www.supergiantgames.com</a>
          </p>
          <p>
            Email: <a href="mailto:info@supergiantgames.com">info@supergiantgames.com</a>
          </p>
          <p>Location: San Francisco, California</p>
        </div>
      </div>
      <p>
        Supergiant Games, LLC is an American independent video game developer and publisher based in San Francisco.
      </p>
      <p className='footerCopy'>© 2023 SuperGiant Games. All rights reserved. Trademarks and intellectual property rights for SuperGiant Games and its game titles, including but not limited to "Bastion," "Transistor," "Pyre," "Hades," and any related logos, characters, and artwork, are owned by SuperGiant Games. Unauthorized use, reproduction, or distribution of any content without explicit permission from SuperGiant Games is strictly prohibited.</p>
      <p>
        Join their vibrant community, explore their worlds, and experience the magic of Supergiant Games.
      </p>
    </div>
  );
};

export default Footer;
