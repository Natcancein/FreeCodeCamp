import React, { Component } from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import twitter from './img/twitter.svg';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import TextQuote from './components/TextQuote.js'
import Footer from './components/Footer.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appStyle: {
        backgroundColor: "salmon"
      }
    };

    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor(){
    
    let newStyle = { ...this.state.appStyle, backgroundColor: '#' + parseInt(Math.random() * 0xffffff).toString(16) };
    this.setState({ appStyle: newStyle })
    console.log(newStyle);
  }

  func2(){

    console.log("funcion 2");
  }

  render() {

    return (
      <div className="App" style={this.state.appStyle}>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >  <div id="quote-box">

            <Card>
              <CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" id="text">
                    <TextQuote />
                  </Typography>
                  <Typography component="p" id="author" align="right">
                    author
      </Typography>
                </CardContent>
                <CardActions className="btns">
                  <Button size="small" color="primary">
                    <a href="https://twitter.com/intent/tweet" id="tweet-quote" title="Tweet this quote!" target="_blank" rel="noopener noreferrer">
                      <img src={twitter} alt="Logo" />
                    </a>
                  </Button>
                  <Button id="new-quote" onClick={() => { this.changeColor(); this.func2();}}>New quote</Button>

                </CardActions>
              </CardActionArea>

            </Card>
          </div>

          <Footer />
        </Grid>
  
      </div>
    );
  }
}

export default App;
