
import React from 'react'

const Button = ({ alt, image, drumKey, handleClick, handleDisplay, src, ref }) => {
  return (
    <div 
    onClick={(e) => {
      handleClick();
      handleDisplay(e);
      
    }}
    className="drum-pad" 
    // id={drumKey} 
   
    alt={alt}
    >
      {drumKey}
      <img  src={image} 
      height="80" width="80"/>
      <audio 
      src={src} 
      className="clip"
      autoPlay
      type="audio/mp3"
      ref ={ref}
      >
    
      </audio>
    </div>
  );
};

export default Button
