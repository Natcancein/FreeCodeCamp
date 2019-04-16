import React from 'react';
import Form from 'react-bootstrap/Form';
import '../App.css';

//Adding font awesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Adding Font Awwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";


library.add(faEdit);

const Editor = (props) => (
    <Form id="Editor">
    <Form.Group >
    <Form.Label className="Titulos" >  
    <FontAwesomeIcon icon="edit" /> Editor</Form.Label>
    <Form.Control 
    as="textarea" rows="15"
    placeholder="Write whatever you want..."
    value={props.value}
    onChange={props.onChange} 
    >
    </Form.Control>
    </Form.Group>
    </Form>
);

export default Editor;