import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components'
import { InputGroup,FormControl,Form } from "react-bootstrap";

function Login() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        setValidated(true);
    };

    const  handlePassword=(event)=>{
        var pass = event.target.value;
        var reg = /^[A-Z]*$/;
        var test = reg.test(pass);
        if (test) {
           alert('pass');
           this.setState({value: pass});
        }else{
          alert('fail');
        }        
   }
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>handlePassword(e)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="button" className="btn btn-custom btn-block" onClick={(e)=>handleSubmit(e)}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </Form>
    )
}

export default Login
