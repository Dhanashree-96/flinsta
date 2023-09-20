// Splash.js
import React from 'react';
import splashGif from "../assets/images/flinsta gif.gif"
import "../assets/css/Style.css"

const Splash = () => {
  return (
    <div className="splash">
    
      <img src={splashGif} alt="Animated GIF" />
    </div>
  );
};

export default Splash;