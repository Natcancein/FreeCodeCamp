import React, { Component } from 'react';
import './App.css';
import Editor from "./components/Editor.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Form from 'react-bootstrap/Form';

// Adding Font Awwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Previewer from './components/Previewer';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faStroopwafel)

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
      <div  className="Fondo"> <Container>
      <Row style={{display: "flex",
            alignItems: "center",height:"100vh"}}>
        <Col>

   <Editor  value={this.state.value}
    onChange={this.handleChange}/>
            </Col>
        <Col>
        <h2 className="Titulos" >Previewer</h2>

        <Previewer text={this.state.value}/> </Col>
      </Row>
     
    </Container></div>
     
    );
  }
}

export default App;
