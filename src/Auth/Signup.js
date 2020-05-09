import React,{useState} from 'react'
import { InputGroup,FormControl,Form,Button } from "react-bootstrap";
import { Redirect } from 'react-router-dom'

const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} = require('mongodb-stitch-browser-sdk');

const client = Stitch.initializeDefaultAppClient('elatic-somyc');

function Signup() {

    const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('Users');
    
    client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
        db.collection('UsersData').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
      ).then(() =>
        db.collection('UsersData').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
      ).then(docs => {
          console.log("Found docs", docs)
          console.log("[MongoDB Stitch] Connected to Stitch")
      }).catch(err => {
          console.error(err)
      });

    const [validated, setValidated] = useState(false);
    const [RedirectVar, setRedirectVar] = useState(false)
    const [PasswordValidation, setPasswordValidation] = useState(false)
    const [SignInRedir, setSignInRedir] = useState(false)
    const setValidationState=()=>{
        if(PasswordValidation===true&&validated===true)
         return true
    }

    const renderRedirect = () => {
        if (RedirectVar) {
            return <Redirect to='/dashboard' />
        }
        else if(SignInRedir){
            return <Redirect to='/sign-in'/>
        }
    }

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

    return (
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                 {renderRedirect()}
                <h3>Sign Up</h3>
                    <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Full name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl required/>
                    <FormControl required/>
                    </InputGroup>

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
                    Already registered 
                    <Button type="button" disabled={setValidationState()} className="btn btn-custom" onClick={()=>{setSignInRedir(true)}}>
                        Sign in
                    </Button>
                </p>
            </Form>
    )
}

export default Signup
