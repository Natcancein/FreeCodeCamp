import React, { Component } from "react";
import '../styles/App.css';
import styled from 'styled-components';
import Display from './Display';
import Button from './Button';
import dataDrum from './dataDrum';

// Wrapper with styled component 

const Wrapper = styled.section`
  padding-top: 2em;
  padding-bottom:3em;
  background: papayawhip; 
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSoundId: 'click',
        };

        this.handleClick=this.handleClick.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);    
      }

handleClick = () => {

  console.log("debe sonar")
  /* this.audio.play()
  this.audio.currentTime = 0
  this.props.handleDisplay(this.props.id) */
}
   
handleDisplay = event => {
        const value = event.currentTarget.id;
        this.setState({
            currentSoundId: `This sound now: ${value}`
          });
        }

  render() {
    
        return (
            <div id="drum-machine" className="app">
             <Wrapper>
              <Display currentSoundText = {this.state.currentSoundId}/>
              <div className="display">
                {dataDrum.map((button)=> 
                <Button
              handleClick={this.handleClick}
              handleDisplay={this.handleDisplay}
              currentSoundId = {button.name}
              key={button.name}
              drumKey={button.name}
              src={button.src}
              image={button.img}
              alt={button.name}
              // en ref  creo que esta el error pero me la ganó XP
              ref={ref => this.audio = ref}
                />)}
              </div>
              </Wrapper>
            </div>
          );
    }
}

export default App;