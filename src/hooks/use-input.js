import { useState } from "react";
const useInput = (validation) =>{

    const [enteredValue,setEnteredValue] = useState('');
    const [isTouched,setIsTouched] = useState(false);

    const valueIsValid = validation(enteredValue);
    const hasError = !valueIsValid && isTouched; 


    const valueChangeHandler = (event) =>{
        setEnteredValue(event.target.value)
    }
    const inputBlurHandler = () =>{
        setIsTouched(true)
    }
    const reset = () =>{
        setEnteredValue('');
        setIsTouched(false)
    }
    return{
        value : enteredValue,
        isvalid : valueIsValid,
        erro : hasError,
        onChangeHandler : valueChangeHandler,
        onBlurHandler : inputBlurHandler,
        rst : reset,
    };
}

export default useInput;