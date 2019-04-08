import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@material-ui/core';

import twitter from '../img/twitter.svg';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appStyle: {
        backgroundColor: "salmon"
      } 
    };

    this.changeColor = this.changeColor.bind(this);
  }


  changeColor() {

    const newStyle = { ...this.state.appStyle, backgroundColor: 'red' }; 
    this.setState({ appStyle: newStyle })
    console.log(newStyle);
  };

  render() {
      return (
          <div id="quote-box">
            
              <Card>
        <CardActionArea>
        
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" id="text">
              <Icon>format_quote</Icon>Text quote<Icon>format_quote</Icon>
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
        <Button id="new-quote" onClick={ () => this.changeColor() }>New quote</Button>

      </CardActions>
        </CardActionArea>
        
      </Card>
   
        <Footer />
          </div>
      );
  }
};

export default Quote;