import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { InputGroup,FormControl,Form,Button } from "react-bootstrap";

function Login() {

    const [validated, setValidated] = useState(false);
    const [RedirectVar, setRedirectVar] = useState(false)
    const [SignUpRedir, setSignUpRedir] = useState(false)
    const [PasswordValidation, setPasswordValidation] = useState(false)

    

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            setRedirectVar(true)
        }
        setValidated(true);
    };

   const setValidationState=()=>{
       if(PasswordValidation===true&&validated===true)
        return true
   }

   const renderRedirect = () => {
        if (RedirectVar) {
            return <Redirect to='/dashboard' />
        }
        else if(SignUpRedir){
            return <Redirect to='/sign-up'/>
        }
    }


    return (

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {renderRedirect()}
            <h3>Sign In</h3>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" />
            </Form.Group>
            <Button type="submit" disabled={setValidationState()} className="btn btn-custom btn-block">
                Submit
            </Button>
            <p className="forgot-password text-right">
                    New User 
                    <Button type="button" disabled={setValidationState()} className="btn btn-custom" onClick={()=>{setSignUpRedir(true)}}>
                        Sign up
                    </Button>
            </p>
            </Form>
    )
}

export default Login
