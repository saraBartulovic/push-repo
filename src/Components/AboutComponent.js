
import AboutItem from './AboutItem';
import Slika1 from '../images/games/H2_PackArt.png';
import Slika2 from '../images/games/Pyre_Rating_Cover.png';
import Slika3 from '../images/games/Transistor_Rating_Cover.png';
import Slika4 from '../images/games/Bastion_Rating_Cover.png';


function AboutComponent()  {
    return (
        <div className="overallAbcont">
          <div className="Abcont">
            <AboutItem
              className="hade"
              image={Slika1}
              title="Hades II"
              description="Hades II is the bewitching sequel to our rouge=like dungeon crawler, in which you'll battle beyond the Underworld using dark sorcery to take on the Titan of Time."
            />
            <AboutItem
              className="pyr"
              image={Slika2}
              title="Pyre"
              description="Pyre is a party-based RPG in which you lead a band of exiles to freedom through an ancient competiton spread across a vast,mystical purgatory."
            />
            <AboutItem
              className="transis"
              image={Slika3}
              title="Transistor"
              description="Transistor is a sci-fi themed action RPG that invites you to wield an extraordinary weapon of unknown origin as you fight through a stunning futuristic city."
            />
            <AboutItem
              className="bast"
              image={Slika4}
              title="Bastion"
              description="Bastion is our first game, an original action RPG in which you must create and fight for civilization's last refuge as a mysterious narrator marks your every move"
            />
          </div>
        </div>
    );
  };
  
  export default AboutComponent;