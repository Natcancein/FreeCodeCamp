import React from 'react';

import Icon from '@material-ui/core/Icon';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const CardActionsQuote = (props) => (
    <CardActions className="btns">
    <Button size="small" variant="outlined" color="primary">
      <a
        href={`https://twitter.com/intent/tweet?text=${props.quote}--${props.author}`}
        id="tweet-quote"
        title="Tweet this quote!"
        target="_blank"
        rel="noopener noreferrer">
         <Icon color="primary">
        send
      </Icon>

      </a>
    </Button>
    <Button size="small" variant="outlined" color="primary"
      id="new-quote"
      onClick={props.btn}>
      New quote
    </Button>
  </CardActions>
);

export default CardActionsQuote;