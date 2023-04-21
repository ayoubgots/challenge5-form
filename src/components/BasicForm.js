import { useState,useEffect } from "react";


const BasicForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [enterdFirstName, setFirstName] = useState('');
  const [enterdLastName, setLastName] = useState('');
  const [enterdEmailAdress, setEmailAdress] = useState('');


  useEffect(()=>{
    if(!(enterdFirstName.trim() === '' || enterdLastName.trim() === '' || enterdEmailAdress.trim() === '')){
      setFormIsValid(true)
    }else{
      setFormIsValid(false)
    }
  },[enterdFirstName,enterdLastName,enterdEmailAdress]);




  const firstNameHandler = (event) =>{
    setFirstName(event.target.value);
  }

  const lastNameHandler = (event) =>{
    setLastName(event.target.value);
  }

  const emailHandler = (event) =>{
    setEmailAdress(event.target.value);
  }

  const formSumbitHandler = (event) =>{
    event.preventDefault();

    if(!formIsValid){
      return
    }
    console.log("hello")
  }



  return (
    <form onSubmit={formSumbitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" onChange={firstNameHandler}/>
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" onChange={lastNameHandler} />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" onChange={emailHandler}/>
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
