import React, { Component } from "react";
import '../styles/App.css';
import styled from 'styled-components';

// Wrapper with styled component 

const Wrapper = styled.section`
 
  padding: 4em;
  background: papayawhip;
  max-width: 50%;
 
`;

class App extends Component {
    render() {
        return (
            <div className="app">
        
                <Wrapper>
  
                <h1>Drum Machine</h1>

  </Wrapper>
            </div>
        );
    }
}

export default App;