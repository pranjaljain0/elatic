import React from 'react'
import { InputGroup,FormControl,Form } from "react-bootstrap";
function Signup() {
    return (
        <div>
             <form>
                <h3>Sign Up</h3>

                    <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Full name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl />
                    <FormControl />
                    </InputGroup>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-custom btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        </div>
    )
}

export default Signup
