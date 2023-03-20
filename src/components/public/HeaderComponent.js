import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <>
      <header
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "yellow" }}>VIKINGS</h1>
      </header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            href="http://localhost:3000/home"
            style={{ color: "yellow" }}
          >
            VIKINGS
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="http://localhost:3000/store"
              style={{ color: "yellow" }}
            >
              Store
            </Nav.Link>
            <Nav.Link
              href="http://localhost:3000/services"
              style={{ color: "yellow" }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="http://localhost:3000/about"
              style={{ color: "yellow" }}
            >
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              style={{
                backgroundColor: "yellow",
                color: "black",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                border: "none",
                borderRadius: "20px",
              }}
            >
              <Link
                to="/signIn"
                style={{ textDecoration: "none", color: "black" }}
              >
                SignIn
              </Link>
            </Button>
            <Button
              style={{
                marginLeft: "10px",
                backgroundColor: "yellow",
                color: "black",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                border: "none",
                borderRadius: "20px",
              }}
            >
              <Link
                to="/signUp"
                style={{ textDecoration: "none", color: "black" }}
              >
                SignUp
              </Link>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderComponent;
