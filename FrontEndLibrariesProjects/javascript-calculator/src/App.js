import React from "react";
import "./App.css";
import CalcButton from "./components/calc_button";
import CalcOperation from "./components/calc_operation";
import CalcDisplay from "./components/calc_display";

// Material UI
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import ParentForm from "./components/StyledForm"
/* 
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;  */

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "400px",
    fontSize: "24px",
    lineHeight: "0.8",
    padding: "50px"
  },
  button: {
    marginLeft: "3%",
    marginTop: "-4%",
    padding: "0px",
    width: "93%"
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function App(props) {
  const { classes } = props;
  return (
     <ParentForm> 
    <div className={classes.root}>
      <Paper spacing={32} style={{ padding: 20 }}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <CalcDisplay id={"display"} />
          </Grid>
          <Grid item xs={9}>
            <Button
              style={{ marginLeft: "2px", marginTop: "0px" }}
              variant="contained"
              className={classes.button}>
              <CalcOperation id="clear" calcOp={"clear"} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              style={{ marginTop: "0px" }}
              variant="contained"
              className={classes.button}>
              <CalcOperation id={"divide"} calcOp={"/"} />
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcButton id={"seven"} calcNumber={7} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcButton id={"eight"} calcNumber={8} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcButton id={"nine"} calcNumber={9} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcOperation id={"multiply"} calcOp={"*"} />
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcButton id={"four"} calcNumber={4} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcButton id={"five"} calcNumber={5} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcButton id={"six"} calcNumber={6} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcOperation id={"subtract"} calcOp={"-"} />
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcButton id={"one"} calcNumber={1} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcButton id={"two"} calcNumber={2} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcButton id={"three"} calcNumber={3} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcOperation id={"add"} calcOp={"+"} />
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" className={classes.button}>
              <CalcButton id={"zero"} calcNumber={0} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcButton calcNumber={"."} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className={classes.button}>
              <CalcOperation id={"equals"} calcOp={"="} />
            </Button>
          </Grid>
        </Grid>{" "}
      </Paper>
    </div>
     </ ParentForm>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
