import { ADD_NUMBER, DO_OPERATION, DO_CLEAR } from "./actionTypes";

export const calcAddNumber = dispatch => newDigit => {
  dispatch({
    type: ADD_NUMBER,
    payload: {
      digit: newDigit
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

export const calcClear = dispatch => clear => {
  dispatch({
    type: DO_CLEAR,
    payload: {
      clear: clear
    }
  })
}