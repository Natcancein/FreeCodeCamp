import React, {Component} from 'react';
import {connect} from 'react-redux';
import { calcAddNumber } from '../actions/calcActions';

class CalcButton extends Component {
  render(){
    return (
      <div id={this.props.id} onClick={()=>{this.props.addNumberToDisplay(this.props.calcNumber)}}>
        <p>{this.props.calcNumber}</p>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  ...state
});

const mapActionsToProps = dispatch => ({
  addNumberToDisplay : calcAddNumber(dispatch)
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CalcButton);