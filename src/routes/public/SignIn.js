import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import HeaderComponent from "../../components/public/HeaderComponent";
import FooterComponent from "../../components/public/FooterComponent";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    // console.log(email);
    // console.log(password);
    e.preventDefault();
    try {
      
      const response = await axios.post("http://localhost:5001/api/signIn/createUser", { email, password });
      // console.log(response);

      if(response.status === 201){
        alert("You login Successfully");
        window.location.href = "http://localhost:3000/home";
      }
      
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <>
      <HeaderComponent />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "yellow",
          height: "500px",
        }}
      >
        <Form style={{ marginTop: "50px" }}>
          <Form.Label
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            LOGIN
          </Form.Label>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ textAlign: "left" }}
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={{ width: "420px" }}
              onChange={ (e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ textAlign: "left" }}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{ width: "420px" }}
              onChange={ (e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            style={{
              color: "yellow",
              backgroundColor: "black",
              border: "none",
            }}
            onClick={handleClick}
          >
            Login
          </Button>
        </Form>
      </div>
      <FooterComponent />
    </>
  );
};

export default SignIn;
