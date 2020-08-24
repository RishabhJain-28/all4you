import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
const SignupForm = () => {
  const [name, setName] = useState("abc");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("asdf@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("1234567891");
  const [password, setPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const signup = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3124/api/customer/signup", {
      name,
      gender,
      email,
      phoneNo: phoneNumber,
      password,
      confirmPassword: password,
      inviteCode,
      gender,
      DOB,
    });
    console.log(res);
  };
  return (
    <Form onSubmit={signup}>
      <Form.Group controlId="formBasicEmail">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
            type="date"
            placeholder="dob"
          />
        </Form.Group>
        {
          //TODO add gender input field
        }
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="number"
          placeholder="Phone number"
        />
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
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Gender</Form.Label>
        <Form.Control
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          type="text"
          placeholder="Gender"
        />
      </Form.Group>
      <Form.Group controlId="formInvite">
        <Form.Label>Invite Code</Form.Label>
        <Form.Control
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
          type="text"
          placeholder="invite"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        signup
      </Button>
    </Form>
  );
};

export default SignupForm;
