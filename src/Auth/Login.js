import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { InputGroup,FormControl,Form,Button,Alert } from "react-bootstrap";

const axios = require('axios')

const options = {
    headers: {'Content-Type': 'application/json'}
  };
  

  function Login() {

    const [validated, setValidated] = useState(false);
    const [RedirectVar, setRedirectVar] = useState(false)
    const [SignUpRedir, setSignUpRedir] = useState(false)
    const [PasswordValidation, setPasswordValidation] = useState(false)
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [fetchedData, setfetchedData] = useState([])
    const [AuthStatus, setAuthStatus] = useState(false)

    const handleSubmit = () => {
        axios.post('https:dygon.herokuapp.com/auth', {"email": Email, "pass":Password},options).then(response=>{
                        if(response.data.state!="Not Found"){
                            setfetchedData(response.data)
                            setRedirectVar(true);
                        }
                        else{
                            setAuthStatus(true)
                        }
                    })
    };

   const setValidationState=()=>{
       if(PasswordValidation===true&&validated===true)
        return true
   }

   const renderRedirect = () => {
        if (RedirectVar) {
            return <Redirect to={{pathname:'/dashboard',state:fetchedData}} />
        }
        else if(SignUpRedir){
            return <Redirect to='/sign-up'/>
        }
    }

    const showButton=()=>{
            if (AuthStatus) {
              return (
                <Alert variant="danger" onClose={() => setAuthStatus(false)} dismissible>
                  <Alert.Heading>Oh snap! Your email or password is incorrect!</Alert.Heading>
                </Alert>
              );
            }
          }

    return (

            <Form noValidate validated={validated}>
                {showButton()}
                {renderRedirect()}
            <h3>Sign In</h3>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </Form.Group>
            <Button type="button" disabled={setValidationState()} className="btn btn-custom btn-block" onClick={()=>{handleSubmit()}}>
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
