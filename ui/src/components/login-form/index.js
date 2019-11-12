import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log('viva');
  }

  return (
    <div className="Login-Form">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">

          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={email}
            onChange={e => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            Please fill your credentials to signin
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Button block bsSize="large" variant="secondary" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
