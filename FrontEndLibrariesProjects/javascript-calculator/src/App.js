import React from 'react';
import './App.css';
import CalcButton from './components/calc_button';
import CalcOperation from './components/calc_operation';
import CalcDisplay from './components/calc_display';
// Material UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    spacing: 0,
  },
  button: {
    marginLeft:"3%",
    marginTop:"-7%",
    padding: theme.spacing.unit * 2,
    width:"93%",
    
    
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
     <Paper spacing={16}>
      <Grid container spacing={24}>
     
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={9} >
           <Button pt={-80} variant="contained" className={classes.button} >
        Clear
      </Button>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" className={classes.button} >
        <CalcOperation id={"divide"} calcOp={'/'}></CalcOperation>
      </Button>
        </Grid>

        <Grid item xs={3}>
        <Button variant="contained" className={classes.button}>
     <CalcButton id={"seven"} calcNumber={7}></CalcButton>
      </Button>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" className={classes.button}>
     <CalcButton id={"eight"} calcNumber={8}></CalcButton>
      </Button>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" className={classes.button}>
     <CalcButton id={"nine"} calcNumber={9}></CalcButton>
      </Button>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" className={classes.button}>
        <CalcOperation id={"multiply"} calcOp={'*'}></CalcOperation>
      </Button>
        </Grid>
       
        <Grid item xs={3}>
        <Button variant="contained" className={classes.button}>
        <CalcButton id={"four"} calcNumber={4}></CalcButton>
      </Button>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" className={classes.button}>
        <CalcButton id={"five"} calcNumber={5}></CalcButton>
      </Button>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" className={classes.button}>
        <CalcButton id={"six"} calcNumber={6}></CalcButton>
      </Button>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" className={classes.button}>
        <CalcOperation id={"subtract"} calcOp={'-'}></CalcOperation>
      </Button>
        </Grid>

      </Grid> </Paper>
    </div>
  );
 /*  return (
    <div  className={classes.root}>
     <Grid container spacing={24}>
     <Paper className={classes.paper}>
     
     <Grid item xs={6} sm={3}>
     
      </Grid>
      <Grid item xs={6} sm={3}>
     
      </Grid>
      <Grid item xs={6} sm={3}>
     
      </Grid>
      <Grid item xs={6} sm={3}>
     <Button variant="contained" className={classes.button}>
  
      </Button>
      </Grid>
      
   
      
 

    
      <CalcButton id={"three"} calcNumber={3}></CalcButton>
      <CalcButton id={"two"} calcNumber={2}></CalcButton>
      <CalcButton id={"one"} calcNumber={1}></CalcButton>
      <CalcButton id={"zero"} calcNumber={0}></CalcButton>
      <CalcOperation id={"add"} calcOp={'+'}></CalcOperation>

    
      <CalcOperation id={"equals"} calcOp={'='}></CalcOperation>
      <CalcDisplay id={"display"}></CalcDisplay>
      </Paper>
      </Grid>
    </div>
  ); */
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
