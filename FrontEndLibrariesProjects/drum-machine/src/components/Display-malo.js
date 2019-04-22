import React from 'react'

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            soundId=""
            //play: false,
          // pause: true
      
          };

          this.handleClickPlay = this.handleClickPlay.bind(this);
          this.play = this.play.bind(this);

    }

    play(){
        /* this.setState({
            play: true,
           // pause: false
          });
 */
document.getElementById(this.state.SoundId).play();

        console.log(e)
    }

    handleClickPlay(event){
        this.setState( { currentSoundId: event.target.children[0].id } );
      }

    render() {
        return (
            <div  className="display">
            <div className="drum-pad" id="Q" onClick={this.play}>Q
            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
            </div>
            <div className="drum-pad" id="W">W
            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
            </div>
            <div className="drum-pad" id="E">E
            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
            </div>
            <div className="drum-pad" id="A">A
            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
            </div>
            <div className="drum-pad" id="S">S
            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
            </div>
            <div className="drum-pad" id="D">D
            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
            </div>
            <div className="drum-pad" id="Z">Z
            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
            </div>
            <div className="drum-pad" id="X">X
            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
            </div>
            <div className="drum-pad" id="C">C
            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />

            </div>
            </div>
        );
    }
}

export default Display;