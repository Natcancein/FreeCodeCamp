import React, { Component } from "react";
import "./App.css";
import Editor from "./components/Editor";
import placeHolderText from './components/placeHolderText' 

// Adding Font Bootstrap-React
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Adding Font Awwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye } from '@fortawesome/free-solid-svg-icons'
library.add(faEye)


// Adding Mark Library
const marked= require("marked");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markDown:  placeHolderText
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markDown: event.target.value
    });
  };

  
  render() {
    const { markDown} = this.state;
    //const newText = marked(markDown);
 
    return (

      <div className="Fondo">
        <Container>
          <h1 className="Titulo">Markdown Previewer</h1>

          <Row
            style={{
              display: "flex",
              alignItems: "center",
              height: "80vh",
              transform: "translateY(-50px)"
            }}>
            <Col>
              <Editor value={markDown} onChange={this.handleChange} />
            </Col>
            <Col>
            <h2 className="Titulos" ><span><FontAwesomeIcon icon="eye" /></span> Previewer</h2>
            <div className="Previewer"> 
              <div dangerouslySetInnerHTML={{ __html:  marked(markDown)}} /></div>
            
            </Col>
          </Row>
          <a className="Footer" href="https://github.com/Natcancein">
            Created by Natcancein
          </a>
        </Container>
      </div>
    );
  }
}

export default App;
