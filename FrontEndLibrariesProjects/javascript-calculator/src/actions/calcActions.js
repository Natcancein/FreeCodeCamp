import { ADD_NUMBER,ADD_SIGN, DO_OPERATION } from "./actionTypes";

export const calcAddNumber = dispatch => newDigit => {
  dispatch({
    type: ADD_NUMBER,
    payload: {
      digit: newDigit
    }
  })
}

export const calcAddSign = dispatch => newSign => {
  dispatch({
    type: ADD_SIGN,
    payload: {
      digitSign: newSign
    }
  })
}


export const calcOperation = dispatch => operation => {
  dispatch({
    type: DO_OPERATION,
    payload: {
      operation: operation
    }
  })
}