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

    let number = (Math.floor(Math.random() * 25));
    
    const endpoint = `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=25`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        // Do stuff with data and then call this.setState();
      console.log(data);
      const quotesData = data[number];
      const regex = /^<p>|[</p>]/ig;
      const regex2 = /&#8217;|&#8217;/ig;
      const com = /&#8220;|&#8221;/ig;
      const apos = /&#8217;/ig;
      const cleanQuote = quotesData.content.replace(regex, '').replace(regex2,"'" ).replace(com,"\"" );
      const cleanAuthor = quotesData.title.replace(apos, '’');
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
