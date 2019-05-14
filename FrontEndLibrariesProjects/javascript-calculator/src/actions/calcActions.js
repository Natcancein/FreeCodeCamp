import { ADD_NUMBER, DO_OPERATION } from "./actionTypes";

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