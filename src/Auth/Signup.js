import React,{useState} from 'react'
import { InputGroup,FormControl,Form,Button } from "react-bootstrap";
import { Redirect } from 'react-router-dom'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const axios = require('axios')

const headers={
    'Content-Type': 'application/json',
  }

function Signup() {

    const [validated, setValidated] = useState(false);
    const [RedirectVar, setRedirectVar] = useState(false)
    const [PasswordValidation, setPasswordValidation] = useState(false)
    const [SignInRedir, setSignInRedir] = useState(false)
    const [Fname, setFname] = useState('')
    const [Lname, setLname] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setcity] = useState('')
    const [fetchedData, setfetchedData] = useState([])

    const setValidationState=()=>{
        if(PasswordValidation===true&&validated===true)
         return true
    }

    const renderRedirect = () => {
        if (RedirectVar) {
            return <Redirect to={{pathname:'/dashboard',state:fetchedData}} />
        }
        else if(SignInRedir){
            return <Redirect to='/sign-in'/>
        }
    }

    const handleSubmit = () => {
            axios.post('https:dygon.herokuapp.com/push', 
                        {
                            "fname": Fname,
                            "lname": Lname,
                            "email": Email,
                            "pass": Password,
                            "city": city,
                            "state": state,
                            "country": country,
                        },{headers:headers}).then(response=>{
                            console.log(response.data.ops[0])
                            setfetchedData(response.data.ops[0])
                            setRedirectVar(true)
                        })
        }

    return (
            <Form noValidate validated={validated}>
                 {renderRedirect()}
                <h3>Sign Up</h3>
                    <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Full name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl required onChange={(e)=>{setFname(e.target.value)}}/>
                    <FormControl required onChange={(e)=>{setLname(e.target.value)}}/>
                    </InputGroup>

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

                    <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>City</InputGroup.Text>
                    </InputGroup.Prepend >
                    <FormControl required onChange={(e)=>{setcity(e.target.value)}}/>
                    <InputGroup.Prepend>
                        <InputGroup.Text>State</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl required onChange={(e)=>{setState(e.target.value)}}/>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Country</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl required onChange={(e)=>{setCountry(e.target.value)}}/>
                    </InputGroup>

                    <Button type="button" disabled={setValidationState()} className="btn btn-custom btn-block" onClick={()=>{handleSubmit()}}>
                        Submit
                    </Button>
                <p className="forgot-password text-right">
                    Already registered 
                    <Button type="button" disabled={setValidationState()} className="btn btn-custom" onClick={()=>{setSignInRedir(true)}}>
                        Sign in
                    </Button>
                </p>
            </Form>
    )
}

export default Signup
