import { ADD_NUMBER, DO_OPERATION, DO_CLEAR } from "../actions/actionTypes";

export default (
  state = {
    previousNumber: null,
    currentOperation: null,
    display: '0'
  }, action)=>{
    switch(action.type){
      case DO_CLEAR: 
      
          return {
            ...state,
            previousNumber: null,
    currentOperation: null,
    display: '0'
          }
       

      case ADD_NUMBER: 
        if(state.display === '0' && action.payload.digit !=="."){
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
          let floatNumber =  parseFloat(state.display);
          switch(state.currentOperation){
            case '+': calcResult = state.previousNumber + floatNumber;break;
            case '-': calcResult = state.previousNumber - floatNumber;break;
            case '*': calcResult = state.previousNumber * floatNumber;break;
            case '/': calcResult = state.previousNumber / floatNumber;break;
            default: calcResult = state.previousNumber + floatNumber;break;
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
        let decimalNumber= parseFloat(state.display);
         /* let decimalNumberLength = decimalNumber.length;
         let displayOperation = decimalNumber.slice(0, decimalNumberLength);
          */
          return {
            previousNumber: decimalNumber,
            currentOperation: action.payload.operation,
            display: "" 
          }
        }
      default: return state;
    }
};
