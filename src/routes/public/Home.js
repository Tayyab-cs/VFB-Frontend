import React from "react";
import HeaderComponent from "../../components/public/HeaderComponent";
import FooterComponent from "../../components/public/FooterComponent";
import { Carousel } from "react-bootstrap";
import ImageOne from "../../images/img1.jpg";
import ImageTwo from "../../images/img2.jpg";
import ImageThree from "../../images/img3.jpg";

const Home = () => {
  return (
    <>
      <HeaderComponent />
      {/* <Image src={ImageOne} alt="My Image" width="100%" height="1000" /> */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageOne}
            alt="First slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>Train Like a Viking</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageTwo}
            alt="Second slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>Play Like a Viking</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageThree}
            alt="Third slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>Live like a Viking</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <FooterComponent />
    </>
  );
};

export default Home;
