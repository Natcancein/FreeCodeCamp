
import React from 'react'

const Button = ({ drumKey, handleClick, name, src }) => {
    return (
      <div onClick={() => handleClick(name, drumKey)} className="drum-pad">
        {drumKey}
        <audio src={src} className="clip" id={drumKey} />
      </div>
    );
  };

export default Button
