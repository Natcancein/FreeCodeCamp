import React from 'react';
import Form from 'react-bootstrap/Form';
import '../App.css';

const Editor = () => (
    <Form>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className="Titulos" >Editor</Form.Label>
    <Form.Control as="textarea" rows="3" />
    </Form.Group>
    </Form>
);

export default Editor;
