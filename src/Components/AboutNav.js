import Logo1 from '../images/logo-raster-hades.png';
import { Link } from 'react-router-dom';


function NavigationAbout() {

  return (
    <div className="nav abo">
      <div className="h">
        <img src={Logo1} alt="" className="h" />
      </div>
      <Link to='/'>
      <div className="lista">Home</div>
      </Link>
    </div>
  );
}

export default NavigationAbout;
