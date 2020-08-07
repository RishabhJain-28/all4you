import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    console.log("aaaa");
    const res = await axios.post("http://localhost:3124/api/customer/login", {
      loginDetails: username,
      password,
    });
    console.log(res);
  };
  return (
    <Form onSubmit={login}>
      <Form.Group>
        {/* <Form.Group controlId="formBasicEmail"> */}
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
