import React from 'react';
import Card from 'react-bootstrap/Card'
import '../App.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import Previewer from './Previewer';

const Previewer = (props) => (

   <Card>
   <Card.Body>
     <Card.Title>Card Title</Card.Title>
     <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
     <Card.Text>
     {props.text} 
     </Card.Text>
     <Card.Link href="#">Card Link</Card.Link>
     <Card.Link href="#">Another Link</Card.Link>
   </Card.Body>
 </Card>

   
    
);

export default Previewer;