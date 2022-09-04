import react, { useState, useReducer } from "react";

const initialValue = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      isTouched: true,
      value: state.value,
    };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }

  return inputStateReducer;
};

const useInput = (validate) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialValue);

  const valueIsValid = validate(inputState.value);
  const valueIsInvalid = !valueIsValid && inputState.isTouched;

  const enteredValueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const valueBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError: valueIsInvalid,
    enteredValueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
