import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Icon } from "@material-ui/core";

const CardContentQuote = (props) => (
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2" id="text" style={props.style}>
      <Icon>format_quote</Icon> 
       {props.quote}
      <Icon>format_quote</Icon>
    </Typography>
    <Typography component="p" id="author" align="right">
    {props.author}
    </Typography>
  </CardContent>
);

export default CardContentQuote;
