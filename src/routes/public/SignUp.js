import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

import HeaderComponent from "../../components/public/HeaderComponent";
import FooterComponent from "../../components/public/FooterComponent";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    // console.log(firstName);
    e.preventDefault();
    try {
      
      const response = await axios
      .post("http://localhost:5001/api/signUp/createUser", {
        firstName,
        lastName,
        email,
        password,
      })

      if(response.status === 201){
        alert("Account created successfully.")
        window.location.href = "http://localhost:3000/home";
      }
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
      
  };

  return (
    <>
      <HeaderComponent />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "yellow",
          height: "500px",
        }}
      >
        <div style={{ margin: "20px" }}>
          <div>
            <Form.Label
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              SIGN UP
            </Form.Label>
            <Form style={{ display: "flex" }}>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                style={{ marginLeft: "10px", textAlign: "left" }}
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
            <Form style={{ display: "flex" }}>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  style={{ width: "420px" }}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
            <Form style={{ display: "flex" }}>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  style={{ width: "420px" }}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>

            <Button
              variant="primary"
              style={{
                color: "yellow",
                backgroundColor: "black",
                border: "none",
              }}
              onClick={handleClick}
            >
              SignUp
            </Button>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default SignUp;
