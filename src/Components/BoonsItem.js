import React, { useState } from 'react';

function BoonsItem (props) {
  const [isSwitched, setIsSwitched] = useState(false);

  const toggleContent = () => {
    setIsSwitched(!isSwitched);
  };

  return (
    <div className={`boon ${isSwitched ? 'switched' : ''}`}>
      <img className={`boonsli ${props.className}`} src={props.image} alt="" />
      <h2 className="boontitle">{props.title}</h2>
      <p className="boontxt">{props.description}</p>
      <button className={`arrowR ${props.className}`} onClick={toggleContent}>
        {isSwitched ? 'Show less' : 'Learn more'}
        <span className="arrowrig" />
      </button>
      
    </div>
  );
};

export default BoonsItem;
