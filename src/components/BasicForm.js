import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    enteredValueChangeHandler: enteredNameHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value !== "");

  const {
    value: LastName,
    isValid: LastNameIsValid,
    hasError: LastNameHasError,
    enteredValueChangeHandler: enteredLastNameHandler,
    valueBlurHandler: LastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    enteredValueChangeHandler: emailHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value !== "" && value.trim().includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && LastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const submitHandler = (event) => {
    event.preventDefault();

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = !firstNameHasError
    ? "form-control"
    : "form-control invalid";

  const lastNameClasses = !LastNameHasError
    ? "form-control"
    : "form-control invalid";

  const emailClasses = !emailHasError ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={enteredNameHandler}
            onBlur={nameBlurHandler}
            value={firstName}
          />
          {firstNameHasError && (
            <p className="error-text">Please enter first name!</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={enteredLastNameHandler}
            onBlur={LastNameBlurHandler}
            value={LastName}
          />
          {LastNameHasError && (
            <p className="error-text">Please enter last name!</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && <p className="error-text">Please enter email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
