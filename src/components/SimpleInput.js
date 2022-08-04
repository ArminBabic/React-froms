import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const inputRefName = useRef();
  const [nameIsValid, setNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const enteredNameIsInvalid = !nameIsValid && enteredNameTouched;

  const inputNameBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }
  };

  const enteredInputSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);

    const refName = inputRefName.current.value;

    console.log(refName);
    console.log(enteredName);
  };

  const formClasses = enteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={enteredInputSubmitHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputRefName}
          type="text"
          id="name"
          onChange={enteredNameChangeHandler}
          onBlur={inputNameBlurHandler}
        />

        {enteredNameIsInvalid && (
          <p className="error-text">Name must be entered.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
