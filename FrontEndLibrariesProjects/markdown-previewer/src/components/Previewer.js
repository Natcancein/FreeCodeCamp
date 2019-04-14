import React from 'react';
import Card from 'react-bootstrap/Card'
import '../App.css';

const Previewer = (props) => (

  <Card>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Here apears all that you write on the left side.</Card.Subtitle>
      <Card.Text>
        {props.text}
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>

);

export default Previewer;