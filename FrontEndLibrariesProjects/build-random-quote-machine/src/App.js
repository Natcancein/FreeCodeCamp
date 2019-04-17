import React, { Component } from "react";
import "./App.css";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import Footer from "./components/Footer.js";
import CardContentQuote from "./components/CardContentQuote";
import CardActionsQuote from "./components/CardActionsQuote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appStyle: {
        backgroundColor: "salmon",
      },
      appStyleText: {
        color:"salmon"
      },

      quote: "Offend nobody, design for somebody.",
      author: "PAUL BOAG"
    };

    this.changeColor = this.changeColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
  }

  handleClick = event => {
    //event.preventDefault(); // May or may not be necessary depending on what you are doing
    
    const endpoint = `https://quotes.stormconsultancy.co.uk/random.json`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
     // console.log(data);
      this.setState({ quote: data.quote, author: data.author });
      })
      .catch(error => console.log("error is", error));
  };

  changeColor() {
    const randomColor= parseInt(Math.random() * 0xffffff).toString(16);

    let newStyle = {
      ...this.state.appStyle,
      backgroundColor: "#" + randomColor
    };

    let newStyleText = {
      ...this.state.appStyle,
      color: "#" + randomColor,
      backgroundColor:"white"
    };

    this.setState({ appStyle: newStyle, appStyleText: newStyleText});
    console.log(newStyle);
  }

  render() {
    return (
      <div className="App" style={this.state.appStyle}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}>
          {" "}
          <div id="quote-box">
            <Card>
              <CardActionArea >
                <CardContentQuote style={this.state.appStyleText}
                  quote={this.state.quote}
                  author={this.state.author}
                />
                <CardActionsQuote
                   quote={this.state.quote}
                   author={this.state.author}
                  btn={() => {
                    this.changeColor();
                    this.handleClick();
                  }}
                />
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
