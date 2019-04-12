import React from 'react';
import Form from 'react-bootstrap/Form';
import '../App.css';

//Adding font awesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Editor = () => (
    <Form>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className="Titulos" >  <FontAwesomeIcon icon="stroopwafel" /> Editor</Form.Label>
    <Form.Control as="textarea" rows="3" />
    </Form.Group>
    </Form>
);

export default Editor;
