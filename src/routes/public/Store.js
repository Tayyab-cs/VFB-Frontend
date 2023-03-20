import React from "react";
import HeaderComponent from "../../components/public/HeaderComponent";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import protein from "../../images/protein.jpg";
import wear from "../../images/wears.jpg";
import equipments from "../../images/equipments.jpg";

const Store = () => {
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
          <Card.Img variant="top" src={protein} />
          <Card.Body>
            <Card.Title>Protein</Card.Title>
            <Card.Text>
              Proteins are large, complex molecules made up of long chains of
              amino acids. They play a vital role in the structure, function,
              and regulation of almost all biological processes in living
              organisms.
            </Card.Text>
            <Button
              variant="primary"
              style={{
                color: "black",
                backgroundColor: "yellow",
                border: "none",
              }}
            >
              View
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img variant="top" src={wear} />
          <Card.Body>
            <Card.Title>Gym Wears</Card.Title>
            <Card.Text>
              Gym wear typically refers to clothing and accessories worn during
              exercise or fitness activities, particularly in a gym or fitness
              center. These clothes are designed to be comfortable.
            </Card.Text>
            <Button
              variant="primary"
              style={{
                color: "black",
                backgroundColor: "yellow",
                border: "none",
              }}
            >
              View
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img variant="top" src={equipments} />
          <Card.Body>
            <Card.Title>Equipments</Card.Title>
            <Card.Text>
              Gym equipment refers to various machines, tools, and accessories
              used in fitness activities and exercises, either at home or in a
              gym or fitness center. examples: Stationary bike, Dumbbells etc.
            </Card.Text>
            <Button
              variant="primary"
              style={{
                color: "black",
                backgroundColor: "yellow",
                border: "none",
              }}
            >
              View
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Store;
