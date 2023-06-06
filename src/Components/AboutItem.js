
function AboutItem(props){
  return (
    <div className={`${props.className}`}>
        <div className='about'>
      <img className='aboutsli' src={props.image} alt="" />
      <div className="aboutInfo">
      <h2 className={`abouttitle ${props.className}`}>{props.title}</h2>
      <p className="abouttxt">{props.description}</p>
      </div>
      </div>
    </div>
  );
};

export default AboutItem;