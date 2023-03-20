import React from "react";
import HeaderComponent from "../../components/public/HeaderComponent";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import strength from "../../images/imgGym.jpg";
import cardio from "../../images/cardio.jpg";
import yoga from "../../images/imgYoga.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <HeaderComponent />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img variant="top" src={strength} style={{ height: "200px" }} />
          <Card.Body>
            <Card.Title>Strength</Card.Title>
            <Card.Text>
              Strength training exercises, also known as resistance training or
              weight training, involve the use of external resistance.
            </Card.Text>
            <Button
              variant="primary"
              style={{ backgroundColor: "yellow", border: "none" }}
            >
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                Register
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img variant="top" src={cardio} />
          <Card.Body>
            <Card.Title>Cardio</Card.Title>
            <Card.Text>
              Cardio exercise can help strengthen the heart muscle and improve
              blood circulation throughout the body.
            </Card.Text>
            <Button
              variant="primary"
              style={{ backgroundColor: "yellow", border: "none" }}
            >
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                Register
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img variant="top" src={yoga} />
          <Card.Body>
            <Card.Title>Yoga</Card.Title>
            <Card.Text>
              Yoga is a form of exercise that originated in ancient India and
              has been practiced for thousands of years.
            </Card.Text>
            <Button
              variant="primary"
              style={{ backgroundColor: "yellow", border: "none" }}
            >
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                Register
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Services;
