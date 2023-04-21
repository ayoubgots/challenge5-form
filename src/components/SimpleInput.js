import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isvalid: enterdNameIsValid,
    erro: nameInputHasError,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameOnBlurHandler,
    rst: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmailAdress,
    isvalid: enterdEmailAdressIsValid,
    erro: emailInputHasError,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailOnBlurHandler,
    rst: resetEmailInput,
  } = useInput(value => value.includes("@"));
  let formsIsValid = false;

  if (enterdNameIsValid && enterdEmailAdressIsValid) {
    formsIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enterdNameIsValid && !enterdEmailAdressIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const InputNameClasses = nameInputHasError
    ? "form-control error-text"
    : "form-control";
  const InputEmailClasses = emailInputHasError
    ? "form-control error-text"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={InputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          onChange={nameChangeHandler}
          onBlur={nameOnBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">This field must not be empty !!!</p>
        )}
      </div>
      <div className={InputEmailClasses}>
        <label>Email Address</label>
        <input
          type="text"
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
          value={enteredEmailAdress}
        ></input>
        {emailInputHasError && (
          <p className="error-text">This too field must not be empty !!!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formsIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
