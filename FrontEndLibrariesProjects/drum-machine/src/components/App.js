import React, { Component } from "react";
import '../styles/App.css';
import styled from 'styled-components';
import Display from './Display';
// Wrapper with styled component 

const Wrapper = styled.section`
  padding-top: 2em;
  padding-bottom:3em;
  background: papayawhip; 
`;

class App extends Component {
    render() {
        return (
            <div className="app" id="drum-machine">
        
                <Wrapper>
  
                <h1>Drum Machine</h1>
                <Display/>

  </Wrapper>
            </div>
        );
    }
}

export default App;