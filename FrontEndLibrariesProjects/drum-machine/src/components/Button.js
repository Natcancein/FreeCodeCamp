
import React from 'react'

const Button = ({ alt, image, drumKey, handleClick, handleDisplay, src, ref }) => {
  return (
    <div 
    onClick={(e) => {
      handleClick();
      handleDisplay(e);
      
    }}
    className="drum-pad" 
    id={drumKey} 
   
    alt={alt}
    >

      <img  src={image} 
      height="120" width="120"/>
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
