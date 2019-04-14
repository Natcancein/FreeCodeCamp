import React, { Component } from 'react';
import './App.css';
import Editor from "./components/Editor.js"
import Previewer from './components/Previewer';

// Adding Font Bootstrap-React
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//Adding font awesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Adding Font Awwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'


library.add(faEdit)
library.add(faEye)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="Fondo"> 
      <Container>
        <Row style={{
          display: "flex",
          alignItems: "center", 
          height: "100vh"
        }}>
          <Col>
            <Editor value={this.state.value}
              onChange={this.handleChange} />
          </Col>
          <Col>
          <Row>
           <FontAwesomeIcon icon="eye" />
            <h2 className="Titulos" >Previewer</h2> </Row>
            <Previewer text={this.state.value} /> 
          </Col>
        </Row>
      </Container>
      </div>

    );
  }
}

export default App;
