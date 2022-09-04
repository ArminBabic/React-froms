import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredNameValue,
    isValid: nameIsValid,
    hasError: enteredNameIsInvalid,
    enteredValueChangeHandler: NameChangeHandler,
    valueBlurHandler: NameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmailValue,
    isValid: emailIsValid,
    hasError: enteredEmailIsInvalid,
    enteredValueChangeHandler: EmailChangeHandler,
    valueBlurHandler: EmailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.trim().includes("@"));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const enteredInputSubmitHandler = (event) => {
    event.preventDefault();

    resetName();

    resetEmail();
  };

  const formNameClasses = enteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const formEmailClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={enteredInputSubmitHandler}>
      <div className={formNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={NameChangeHandler}
          onBlur={NameBlurHandler}
          value={enteredNameValue}
        />

        {enteredNameIsInvalid && (
          <p className="error-text">Name must be entered.</p>
        )}
      </div>
      {/* email  */}
      <div className={formEmailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={EmailChangeHandler}
          onBlur={EmailBlurHandler}
          value={enteredEmailValue}
        />

        {enteredEmailIsInvalid && (
          <p className="error-text">Please enter your email.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
