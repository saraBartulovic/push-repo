import Logo from '../images/Supergiant_games_logo.jpg';

function Info() {
    return (
      <div className="infoA">
        <h1 id="AboutNasl">
            About <span id="poseb"> us</span>
        </h1>

        <div className='logoAb'>
        <img src={Logo} className='logoAbImg'></img>
        <p>
            We are an American independent video game developer and publisher based in San Francisco.
            <br/>
            We were formed by Amir Rao and Gavin Simon in 2009.
            <br/>
            Our goal is to make games that spark your imagination like the games you played as a kid
        </p>
        </div>
        <br/>
        <h3>
            Except for Hades we have other games for you to try and enjoy
        </h3>
        <h2>Check them out below!</h2>
      </div>
    );
  }
  
  export default Info;