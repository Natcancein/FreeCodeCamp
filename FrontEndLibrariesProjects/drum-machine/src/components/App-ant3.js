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
        
        this.title = React.createRef()

        this.handleClickPlay = this.handleClickPlay.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.playSound = this.playSound.bind(this);
        
      }
    
      componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
       }
       
       componentWillUnmount() {
     document.removeEventListener("keydown", this.handleKeyPress);
       }
       
       playSound(){
         let sound = this.state.currentSoundId;
         console.log(sound)
         console.log("title" + this.title)
         //this.title.play();

        // document.getElementById(sound).play();
       }
     
     /* Play audio with javascript
     http://stackoverflow.com/questions/9419263/ddg#18628124
     
     The Joy of HTML5 Audio: Tips & Tricks for Easy Sound Embedding
     https://www.elated.com/articles/html5-audio/
     */
       
       
       /* To do:
       It would be nice if when the user presses a key from the drum pad, the "button" reacts the same way as when the user hovers them with the mouse.
       */
       handleKeyPress(event){
         
         const key = KEYCODES[event.keyCode]; // this is to pass the last test.
         /* 
         Here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode 
         says that *keyCode* is deprecated and to avoid using it. 
         And here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
         it is recommended to use *key* instead.
         */
         
         const isValidKey = Object.keys(SOUNDFILE_NAMES_AND_KEYS).includes(key);
         this.setState( { currentSoundId: (isValidKey)? key : '' } );
       }
           
       handleClickPlay(event){
        const value = event.target.id;
         this.setState( { currentSoundId: value } );
       }
       
  render() {
    let message = 'No sound';
    if (this.state.currentSoundId) {
      message = `Sound: ${this.state.currentSoundId}`;
      this.playSound();  
    }

        return (
            <div id="drum-machine" className="app">
             <Wrapper>
              <Display  currentSoundText={message}/>
              <div className="display">
                {data.map((button)=> 
                <Button
              handleClickPlay={this.handleClickPlay}
              playSound={this.playSound}
              currentSoundId = {button.name}
              key={button.name}
              drumKey={button.name}
              src={button.src}
              ref = { this.title }
                />)}
              </div>
              </Wrapper>
            </div>
          );


    }
}

export default App;