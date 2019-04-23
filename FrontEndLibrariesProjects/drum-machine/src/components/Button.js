
import React from 'react'

const Button = ({ drumKey, handleClick, handleDisplay, src, ref }) => {
  return (
    <div 
    onClick={() => {
      handleClick();
      handleDisplay();
      
    }}
    className="drum-pad" id={drumKey}>
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
