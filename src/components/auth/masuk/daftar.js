import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import {MDBIcon, MDBRow } from "mdbreact";
export default class Register extends Component {
constructor(props) {
    super(props);
    this.state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
onChange = (e) => this.setState({ [e.target.name]: e.target.value });
handleSubmit(event) {
    console.log(this.state.full_name)
    console.log(this.state.email)
    console.log(this.state.password)
    event.preventDefault();
}
render() {
    return (
        <Container style={{ marginTop: '100px' }}>
        <h3>Sign Up and Start Learning!</h3>
          <Form>
<Form.Group controlId="formBasicFirstName" style={{ width: '300px' }}>
              <Form.Label>Full name</Form.Label>
              <Form.Control type="text" placeholder="Ente full Name" name="full_name" value={this.state.first_name} onChange={this.onChange}/>
            </Form.Group>

<Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>
            </Form.Group>
<Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
            </Form.Group>
<Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Signup
            </Button>
            <div id="login-sign-up-container">
            <p id="login-need-account-text">Don't have an account?</p> <button id="login-sign-up-button" type="button" onClick={this.onClick}>Sign Up</button>
          </div>
</Form>
<MDBRow className="mt-2 mb-3 d-flex justify-content-center">
<a href="#!" className="fa-lg p-2 m-2 fb-ic">
  <MDBIcon fab icon="facebook-f" size="lg" className="white-text" />
</a>
<a href="#!" className="fa-lg p-2 m-2 google-ic">
  <MDBIcon fab className="fa-google -g white-text fa-lg" />
</a>
</MDBRow>
       </Container>
      )
   }
}
