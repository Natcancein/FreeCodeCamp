import React from 'react';

import twitter from "../img/twitter.svg";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const CardActionsQuote = (props) => (
    <CardActions className="btns">
    <Button size="small" color="primary">
      <a
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        title="Tweet this quote!"
        target="_blank"
        rel="noopener noreferrer">
        <img src={twitter} alt="Logo" />
      </a>
    </Button>
    <Button
      id="new-quote"
      onClick={props.btn}>
      New quote
    </Button>
  </CardActions>
);

export default CardActionsQuote;