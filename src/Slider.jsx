import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";
import Logo from "./images/abc.jpg";
import Image1 from "./images/def.jpg";

const data = {
  imgUrl: "./images/abc.jpg",
};

export default function Slider() {
  return (
    <div
      style={{
        display: "block",
        width: "100vw",
        height: "90vh",
        padding: 0,
      }}
    >
      <h4>React-Bootstrap Carousel Component</h4>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Logo} alt="Image One" />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Image1} alt="Image Two" />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
