import { ADD_NUMBER, DO_OPERATION } from "../actions/actionTypes";

export default (
  state = {
    previousNumber: null,
    currentOperation: null,
    display: '0'
  }, action)=>{
    switch(action.type){
      case ADD_NUMBER: 
        if(state.display == '0'){
          return {
            ...state,
            display : action.payload.digit
          }
        }else{
          return {
            ...state,
            display : state.display + "" + action.payload.digit
          }
        }
      case DO_OPERATION:
        if(state.previousNumber != null && state.currentOperation != null){
          let calcResult = 0;
          switch(state.currentOperation){
            case '+': calcResult = state.previousNumber + parseInt(state.display);break;
            case '-': calcResult = state.previousNumber - parseInt(state.display);break;
            case '*': calcResult = state.previousNumber * parseInt(state.display);break;
            case '/': calcResult = state.previousNumber / parseInt(state.display);break;
            default: calcResult = state.previousNumber + parseInt(state.display);break;
          }

          if(action.payload.operation == '='){
            return {
              currentOperation: null,
              previousNumber: null,
              display: calcResult
            }
          }else{
            return {
              previousNumber: calcResult,
              currentOperation: action.payload.operation,
              display: '0'
            }
          }
        }else{
          return {
            previousNumber: parseInt(state.display),
            currentOperation: action.payload.operation,
            display: '0'
          }
        }
      default: return state;
    }
};