import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import AdminHome from "../../routes/admin/AdminHome";

import HeaderComponent from "../../components/public/HeaderComponent";
import FooterComponent from "../../components/public/FooterComponent";

const RegistrationForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [cnic, setCnic] = useState("");
  const [contact, setContact] = useState("");

  const handleClick =  async (e) => {
    e.preventDefault();

    try {
      const registerData = {firstName, lastName, age, weight, gender, city, cnic, contact}
      // console.log(registerData)
      const response = await axios.post("http://localhost:5001/api/register/createUser", registerData);

      if(response.status === 201){
        alert("Registration Successful.")
        window.location.href = "http://localhost:3000/home";
        AdminHome(registerData);
      }
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

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
            <Form style={{ display: "flex" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="Text" placeholder="Enter First Name" onChange={ (e) => setFirstName(e.target.value)}/>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                style={{ marginLeft: "10px" }}
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="Text" placeholder="Enter Last Name" onChange={ (e) => setLastName(e.target.value)} />
              </Form.Group>
            </Form>
            <Form style={{ display: "flex" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>
                <Form.Control type="Text" placeholder="Enter Age" onChange={ (e) => setAge(e.target.value)} />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                style={{ marginLeft: "10px" }}
              >
                <Form.Label>Weight</Form.Label>
                <Form.Control type="Text" placeholder="Enter Weight" onChange={ (e) => setWeight(e.target.value)} />
              </Form.Group>
            </Form>
            <Form style={{ display: "flex" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="Text" placeholder="Enter Gender" onChange={ (e) => setGender(e.target.value)} />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                style={{ marginLeft: "10px" }}
              >
                <Form.Label>City</Form.Label>
                <Form.Control type="Text" placeholder="Enter City" onChange={ (e) => setCity(e.target.value)} />
              </Form.Group>
            </Form>
            <Form style={{ display: "flex" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>CNIC</Form.Label>
                <Form.Control type="Text" placeholder="Enter CNIC" onChange={ (e) => setCnic(e.target.value)} />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                style={{ marginLeft: "10px" }}
              >
                <Form.Label>Contact No</Form.Label>
                <Form.Control type="Text" placeholder="Enter Contact No" onChange={ (e) => setContact(e.target.value)} />
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
              Submit
            </Button>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default RegistrationForm;
