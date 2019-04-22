import React, { Component } from "react";
import '../styles/App.css';
import styled from 'styled-components';
import Display from './Display';
import Button from './Button';
// Wrapper with styled component 

const Wrapper = styled.section`
  padding-top: 2em;
  padding-bottom:3em;
  background: papayawhip; 
`;

const data = [
    {
        name: "",
        key: "Q",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
        name: "",
        key: "W",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
        name: "",
        key: "E",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
        name: "",
        key: "A",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
        name: "",
        key: "S",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
        name: "",
        key: "D",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        name: "",
        key: "Z",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
        name: "",
        key: "X",
        src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
        name: "",
        key: "C",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSoundId: ''};

        this.handleClick=this.handleClick.bind(this);
        this.playSound = this.playSound.bind(this);
      }
    
    handleClick (){
        console.log(this);
       /*  this.setState( 
            { currentSoundId: event.target.children[0].id } ); */
      }
    
    playSound(){
        document.getElementById(this.state.currentSoundId).play();
      }

    render() {

        return (
            <div id="drum-machine" className="app">
             <Wrapper>
              <Display display={this.state.display} />
              <div className="display">
                {data.map((button)=> 
                <Button
               handleClick={this.handleClick}
              display={this.state.display}
              name={button.name}
              drumKey={button.key}
              src={button.src}
                />)}
              </div>
              </Wrapper>
            </div>
          );


    }
}

export default App;