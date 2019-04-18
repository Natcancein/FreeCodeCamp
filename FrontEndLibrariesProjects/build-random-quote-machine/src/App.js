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
    
    const endpoint = `https://gist.githubusercontent.com/christianvuerings/6624542/raw/379a1943f1881b3d3d4ca3e3f456df4d4608c9e7/quotes.json`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        // Do stuff with data and then call this.setState();
     let number = (Math.floor(Math.random() * data.quotes.length));
      const quotesData = data.quotes[number];
      console.log(quotesData);
      const cleanQuote = quotesData.quote;
      const cleanAuthor = quotesData.author;
      this.setState({ quote: cleanQuote, author: cleanAuthor });
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
