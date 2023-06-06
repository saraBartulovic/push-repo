import React from 'react';
import BoonsItem from './BoonsItem';
import Slika1 from "../images/boons/Aphrodite_symbol.jpg";
import Slika2 from "../images/boons/Ares_symbol.jpg";
import Slika3 from "../images/boons/Artemis_symbol.jpg";
import Slika4 from "../images/boons/Athena_symbol.jpg";
import Slika5 from "../images/boons/Demeter_symbol.jpg";
import Slika6 from "../images/boons/Dionysus_symbol.jpg";
import Slika7 from "../images/boons/Poseidon_symbol.jpg";
import Slika8 from "../images/boons/Zeus_symbo.jpg";

function BoonsComponent()  {
  return (
    <a name="boons">
      <div className="overallBcont">
        <div className="txtBOON">
          <p>
            ~ Use the powers of the Olympian gods to venture farther in your trials and combine them for powerful combos
            ~ <br />
            They're especially helpful when u have to take on the HEAT!
          </p>
        </div>
        <div className="booncont">
          <BoonsItem
            className="aph"
            image={Slika1}
            title="Aphrodite"
            description="Aphrodite gives boons that inflict Weak and Charmed on opponents, as well as improve survivability."
          />
          <BoonsItem
            className="ares"
            image={Slika2}
            title="Ares"
            description="Ares gives boons that inflict Doom, create Blade Rifts, or increase the damage of your attacks."
          />
          <BoonsItem
            className="art"
            image={Slika3}
            title="Artemis"
            description="Artemis gives boons that grant Critical hits and improve Cast abilities."
          />
          <BoonsItem
            className="ath"
            image={Slika4}
            title="Athena"
            description="Athena gives boons that allow abilities to Deflect projectiles and improve Calls and defensive options."
          />
          <BoonsItem
            className="dem"
            image={Slika5}
            title="Demeter"
            description="Demeter gives boons that add Chill to abilities, improve healing, and various debuffs."
          />
          <BoonsItem
            className="di"
            image={Slika6}
            title="Dionysus"
            description="Dionysus gives boons that inflict Hangover, create Festive Fog, and improve survivability."
          />
          <BoonsItem
            className="pos"
            image={Slika7}
            title="Poseidon"
            description="Poseidon gives boons that add Knockback to abilities and improve room rewards."
          />
          <BoonsItem
            className="zeu"
            image={Slika8}
            title="Zeus"
            description="Zeus gives boons that add chain lightning to abilities, or cause lightning to strike nearby enemies."
          />
        </div>
      </div>
    </a>
  );
};

export default BoonsComponent;
