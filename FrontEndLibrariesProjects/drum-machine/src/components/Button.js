
import React from 'react'

const Button = ({ image, drumKey, handleClick, handleDisplay, src, ref }) => {
  return (
    <div 
    onClick={(e) => {
      handleClick();
      handleDisplay(e);
      
    }}
    className="drum-pad" id={drumKey} src={image}>
      {drumKey}
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
