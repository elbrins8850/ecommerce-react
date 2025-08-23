import React from "react";
import "./Hero.css";
import { Container, Row, Col } from "react-bootstrap";

const hand_icon = "assets/hand_icon.png";
const arrow_icon = "assets/arrow.png";
const hero_image = "assets/hero_image.png";
const Hero = () => {
  return (
    <div className="heroo">
      <Container>
        <Row className="hero">
          <Col md={5} lg={6}>
            <div className="left">
              <h4>NEW ARRIVALS ONLY</h4>
              <div className="content">
                <h1>
                  new <img src={hand_icon} alt="hand icon" />
                </h1>
                <h1>
                  collections <br /> for everyone
                </h1>
              </div>
              <button>
                <a href="#arrow_icon">
                  {" "}
                  Latest Collection{" "}
                  <img src={arrow_icon} alt="direction icon" />
                </a>
              </button>
            </div>
          </Col>
          <Col md={7} lg={6}>
            <div className="right">
              <img src={hero_image} alt="img" width={550} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
