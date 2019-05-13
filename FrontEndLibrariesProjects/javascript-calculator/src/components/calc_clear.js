import React, {Component} from 'react';
import {connect} from 'react-redux';
import { calcClear } from '../actions/calcActions';

class CalcClear extends Component {
  render(){
    return (
      <div id={this.props.id} onClick={()=>{this.props.addNumberToDisplay(this.props.calcNumber)}}>
        <p>{this.props.calcClear}</p>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  ...state
});

const mapActionsToProps = dispatch => ({
  addNumberToDisplay : calcClear(dispatch)
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CalcClear);