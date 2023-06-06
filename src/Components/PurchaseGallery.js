import React from 'react';
import Slika from "../images/purchaseim.jpg";
import Slika1 from "../images/btn_steam.png";
import Slika2 from "../images/btn_epic.png";
import Slika3 from "../images/btn_ms.png";
import Slika4 from "../images/btn_nintendo.png";
import Slika5 from "../images/btn_ps.png";

import Slika6 from "../images/galleryM/HouseofHades.jpg";
import Slika7 from "../images/galleryM/Tartarus_01.jpg";
import Slika8 from "../images/galleryM/tartarus2.jpg";
import Slika9 from "../images/galleryM/Asphodel_01.png";
import Slika10 from "../images/galleryM/Elysium_Overlook.png";
import Slika11 from "../images/galleryM/chaosrealm.png";
import Slika12 from "../images/galleryM/templeofstyx.png";
import Slika13 from "../images/galleryM/greece.png";
import Slika14 from "../images/galleryM/greece2.jpg";

function PurchaseGallery() {
  return (
    <div>
    <a name="purchase">
      <div className="purchase">
        <div className="clippur">
          <img className="purimg" src={Slika} alt="" />
        </div>
        <div className="purinfo">
          <h1>Purchase</h1>
          <p className="purtxt">
            Step into the shoes of Zagreus, hack and slash your way to victory, reveal secrets and advance in
            this critically acclaimed title that took the gaming world by storm in 2020 and 2021
            <br />
            Made and published by the people who brought you Bastion, Pyre and Transistor
          </p>
          <h1>Available on:</h1>
          <div className="shop">
            <a href='https://store.steampowered.com/app/1145360/Hades/'><img src={Slika1} className="shopim" alt="" /></a>
            <a href='https://store.epicgames.com/en-US/p/hades'><img src={Slika2} className="shopim" alt="" /></a>
            <a href='https://www.xbox.com/en-US/games/store/hades/9p8dl6w0jbb8'><img src={Slika3} className="shopim" alt="" /></a>
            <a href='https://www.nintendo.com/store/products/hades-switch/'><img src={Slika4} className="shopim" alt="" /></a>
            <a href='https://www.playstation.com/en-hr/games/hades/'><img src={Slika5} className="shopim" alt="" /></a>
          </div>
        </div>
      </div>
    </a>
    <a name="gallery">
    <div className="gallery">
      <h2>But you don't have to purchase blindly, check out the art from the game itself!</h2>
      <div className="gridcont">
        <div className="g"> <img src={Slika6} alt="" /></div>
        <div className="g"> <img src={Slika7} alt="" /></div>
        <div className="g"> <img src={Slika8} alt="" /></div>
        <div className="g"> <img src={Slika9} alt="" /></div>
        <div className="g"> <img src={Slika10} alt="" /></div>
        <div className="g"> <img src={Slika11} alt="" /></div>
        <div className="g"> <img src={Slika12} alt="" /></div>
        <div className="g"> <img src={Slika13} alt="" /></div>
        <div className="g A"><img src={Slika14} alt="" /></div>
      </div>
    </div>
  </a>
  </div>
  );
}

export default PurchaseGallery;
