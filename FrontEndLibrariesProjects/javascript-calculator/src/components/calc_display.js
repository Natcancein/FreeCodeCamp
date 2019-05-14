import React, {Component} from 'react';
import { connect } from 'react-redux';

class CalcDisplay extends Component{
  render(){
    return (
    <div 
    className='screen' 
    id={this.props.id}>
      <p>{this.props.calc.display}</p>
    </div>)
  }
}

const mapStateToProps = state =>({
  ...state
});

export default connect(
  mapStateToProps
)(CalcDisplay);