// Splash.js
import React from 'react';
import splashGif from "../../assets/images/Splash_gif.gif"

const Splash = () => {
  return (
    <div className="splash">
    
      <img src={splashGif} alt="Animated GIF" />
    </div>
  );
};

export default Splash;