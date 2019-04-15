import React from 'react';
import Card from 'react-bootstrap/Card'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Adding Font Awwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye } from '@fortawesome/free-solid-svg-icons'
library.add(faEye)

const Previewer = (props) => (
 
  <div>
     
 <h2 className="Titulos" ><span><FontAwesomeIcon icon="eye" /></span> Previewer</h2>

  <Card className="Previewer">
    
        {props.text}
      
  </Card> </div>

);

export default Previewer;