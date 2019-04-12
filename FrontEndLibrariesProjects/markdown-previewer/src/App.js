import React, { Component } from 'react';
import './App.css';
import Editor from "./components/Editor.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Adding Font Awwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Previewer from './components/Previewer';

library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
      <div  className="Fondo"> <Container>
      <Row style={{display: "flex",
            alignItems: "center",height:"100vh"}}>
        <Col>< Editor /></Col>
        <Col>< Previewer /></Col>
      </Row>
     
    </Container></div>
     
    );
  }
}

export default App;
