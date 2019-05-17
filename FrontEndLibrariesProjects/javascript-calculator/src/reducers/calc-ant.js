import { ADD_NUMBER, DO_OPERATION } from "../actions/actionTypes";

const defaultState = {
previousNumber: null,
    currentOperation: null,
    display: '0'
};

export default (
  state = {defaultState}, action)=>{
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
            display : state.display + ""+action.payload.digit
          }
        }
      case DO_OPERATION:
        let parsePreviousNumber= parseFloat(state.previousNumber);
        if(state.previousNumber != null && state.currentOperation != null){
          let calcResult = 0;
          switch(state.currentOperation){
            case '+': calcResult = parsePreviousNumber + state.display;break;
            case '-': calcResult = parsePreviousNumber - state.display;break;
            case '*': calcResult = parsePreviousNumber * state.display;break;
            case '/': calcResult = parsePreviousNumber / state.display;break;
            case 'clear':
            return defaultState;
             break;
            default: calcResult = state.previousNumber + state.display;break;
          }

          if(action.payload.operation === '='){
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
            previousNumber: state.display,
            currentOperation: action.payload.operation,
            display: '0'
          }
        }
      default: return state;
    }
};