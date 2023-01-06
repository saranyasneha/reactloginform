import React, {useState} from "react";
import Loginform from "./Loginform";
import LoginSuccess from "./LoginSuccess";

const Form=()=>{
    const [formIsSubmitted,setFormIsSubmitted]=useState(false);

    const submitForm=()=>{
        setFormIsSubmitted(true);
    };

    return <div>{!formIsSubmitted ? <Loginform submitForm={submitForm}/> : <LoginSuccess/>}</div>
};
export default Form;