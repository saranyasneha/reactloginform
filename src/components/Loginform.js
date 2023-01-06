import React, {useEffect, useState} from "react";
import validation from "./validation";
import facebook from "./images/facebook.png";
import google from "./images/google.png";

const Loginform=({submitForm})=>{
    const [values,setValues]=useState({
        userName:"",
        email:"",
        password:"",

    });
    const [errors,setErrors]=useState({});
    const [dataIsCorrect,setDataIsCorrect]=useState(false);
    const handleChange=(event)=>{
        setValues({
            ...values,[event.target.name]:event.target.value,
        })                                                                                                                                                  
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    }
    useEffect(()=>{
        if (Object.keys(errors).length===0 &&dataIsCorrect){
            submitForm(true);
        }
    },[errors]);
    return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">Login</h2>
            </div>
            <form className="form-wrapper">
                <div className="name">
                    <label className="label">User Name</label>
                    <input 
                    type="text"
                     className="input" 
                     name="userName" 
                     value={values.userName}
                     onChange={handleChange}
                     />
                     {errors.userName &&<p className="error">{errors.userName}</p>}
                </div>
                <div className="email">
                    <label className="label">Email</label>
                    <input 
                    type="email" 
                    className="input" 
                    name="email" 
                    value={values.email}
                    onChange={handleChange}
                    />
                     {errors.email &&<p className="error">{errors.email}</p>}
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input 
                    type="password" 
                    className="input" 
                    name="password" 
                    value={values.password}
                    onChange={handleChange}
                    />
                     {errors.password &&<p className="error">{errors.password}</p>}
                </div>
                <div>
                    <button className="submit" onClick={handleFormSubmit}>LOGIN</button>
                </div>
                
            </form>
            <div className="msg">
                <p>Or SignUp Using</p>
            </div>
            <div className="social">
                <img src={facebook} className="facebook" />
                <img src={google} className="google"/>
            </div>
        </div>
    </div>
    );
}
export default Loginform;