import { useState } from "react";

const SimpleInput = (props) => {
  //all constant declared here

  const [enteredName, setEnteredName] = useState("");
  const [InputFieldsTouched, setInputFieldsTouched] = useState(false);

  const enteredNameIsValid  = enteredName.trim() !== '';
  const nameInputInvalid = !enteredNameIsValid && InputFieldsTouched;

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };


  const formSubmissionHandler = (event) => {
    event.preventDefault();

    //if we submited the form  that means all the fields had been confirmed and touched
    setInputFieldsTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setInputFieldsTouched(false);
  };

  const InputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={InputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputHandler}
        />
        {nameInputInvalid && (
          <p className="error-text">This field shouldn't be empty !!!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
