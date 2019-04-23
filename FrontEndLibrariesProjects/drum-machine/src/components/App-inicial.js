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
        name: "Q",
        key: "Q",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
        name: "W",
        key: "W",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
        name: "E",
        key: "E",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
        name: "A",
        key: "A",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
        name: "S",
        key: "S",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
        name: "D",
        key: "D",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        name: "Z",
        key: "Z",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
        name: "X",
        key: "X",
        src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
        name: "C",
        key: "C",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSoundId: 'click',
         
            
        };

        this.handleClick=this.handleClick.bind(this);
        this.playSound = this.playSound.bind(this);
        
      }
    
  /*   handleClick (e){
        console.log(e)
      //console.log(this.audio);  
    }
 */
    handleClick = event => {
        const value = event.currentTarget.id;
        
        this.setState({
            currentSoundId: value
          });
          
         
            console.log(value);
           this.playSound(value);
       
      //console.log("!esto es" + this.state.currentSoundId);
//document.getElementById(this.state.currentSoundId).play();

      };

    
    playSound = (value) =>{
       
        let audio = document.getElementById(value).innerText;
        console.log("!esto es el id" + audio);
     // audio.currentTime = 0;
     // audio.play();
       // console.log("!esto es" + audio);
     

  //document.getElementById(current).play();
//this.play();


} 

  render() {
    
        return (
            <div id="drum-machine" className="app">
             <Wrapper>
              <Display currentSoundId = {this.state.currentSoundId}/>
              <div className="display">
                {data.map((button)=> 
                <Button
              handleClick={this.handleClick}
              playSound={this.playSound}
              currentSoundId = {button.name}
              key={button.name}
              drumKey={button.name}
              src={button.src}
              ref={this.myAudio}
                />)}
              </div>
              </Wrapper>
            </div>
          );


    }
}

export default App;