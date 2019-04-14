import React from 'react';
import Form from 'react-bootstrap/Form';
import '../App.css';

//Adding font awesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Editor = (props) => (
    <Form>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className="Titulos" >  
    <FontAwesomeIcon icon="edit" /> Editor</Form.Label>
    <Form.Control 
    componentClass="textarea"
    placeholder="wherever"
    rows="3"
    value={props.value}
    onChange={props.onChange} >
    </Form.Control>
    </Form.Group>
    </Form>
);

export default Editor;