import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
const UserProfile = () => {
  const [name, setName] = useState("abc");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("sasukeuchiha3396@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState(1234567891);
  const [password, setPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [referCode, setReferCode] = useState("");
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
      referCode,
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
            disabled
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
            type="date"
            placeholder="dob"
            disabled
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
          disabled
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="number"
          placeholder="Phone number"
          disabled
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default UserProfile;
