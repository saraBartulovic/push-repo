import React, { useEffect, useState } from 'react';
import Video from "../videos/Hades_06-03-2023_10-48-17-677.mp4";

function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselItems = [
    "In Hades you play as the underworld prince, Zagreus, in his quest to escape the Underworld of Greek myth. Death is a mere inconvenience for Zagreus, returning to Hades' palace each time to reflect in the Mirror of Night and try again. Receive Boons from the other gods of Olympus and find treasures to aid in each escape attempt.",
    "Zagreus has always had a sense that he doesn't belong in the House of Hades. Sometime before the start of the game he decides, against his father's will, to escape from the Underworld—no matter how many tries it might take him.",
    "Zagreus is met with numerous obstacles throughout the realms of Tartarus, Asphodel, Elysium, and the Temple of Styx. He is mostly faced with various aggressive shades working for his father, but he also has run-ins with the Furies, the skeletal remains of the Lernaean Hydra, and the champion of Elysium, in order to arrive at the Temple of Styx."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const handleIndicatorClick = (index) => {
    setCarouselIndex(index);
  };

  return (
    <div className="intro">
      <div className="introvid">
        <video autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="introover">
        {carouselItems.map((item, index) => (
          <p className={`textint ${carouselIndex === index ? "active" : ""}`} key={index}>
            {item}
          </p>
        ))}
        <div className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <span
              className={`indicator ${carouselIndex === index ? "active" : ""}`}
              data-index={index}
              key={index}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
