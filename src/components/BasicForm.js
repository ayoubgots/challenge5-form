import useInput from "../hooks/use-input";

const BasicForm = () => {
  const {
    value :enteredFirstName,
    isvalid :firstNameIsValid,
    erro : firstNameHasError,
    onChangeHandler : firstNameChangeHandler,
    onBlurHandler : firstNameOnBlurHandler,
    rst : resetfirstName,
  } = useInput(value => value.trim() !== "");

  const {
    value :enteredLastName,
    isvalid : lastNameIsValid,
    erro : lastNameHasError,
    onChangeHandler : lastNameChangeHandler,
    onBlurHandler : lastNameOnBlurHandler,
    rst : resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value : enteredEmailAdress,
    isvalid : emailIsValid,
    erro : emailHasError,
    onChangeHandler : emailChangeHandler,
    onBlurHandler : emailOnBlurHandler,
    rst : resetEmail,
  } = useInput(value => value.includes("@"));

  let formIsValid = false;
  console.log(enteredFirstName);
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true; 
    console.log("form valid")
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) {
      return;
    }
    formIsValid = false;
    resetfirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control error-text"
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? "form-control error-text"
    : "form-control";
  const emailClasses = emailHasError
    ? "form-control error-text"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            onChange={firstNameChangeHandler}
            onBlur={firstNameOnBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <h6 className="error-text">This Field must not be empty</h6>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            onChange={lastNameChangeHandler}
            onBlur={lastNameOnBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <h6 className="error-text">This Field must not be empty</h6>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
          value={enteredEmailAdress}
        />
        {emailHasError && (
          <h6 className="error-text">This Field must not be empty</h6>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default BasicForm;
