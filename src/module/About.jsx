import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { cewe, cowo } from '../assets';

function About() {
  return (
    <Container className="position-relative about-container" fluid>
      <h2 className="text-center mb-4 font-playfair">We Are Tying The Knot</h2>
      <p className="text-center mb-5">
        <span className="font-playfair">
          “A great marriage is not when the ‘perfect couple’ comes together. It
          is when an imperfect couple learns to enjoy their differences.”
        </span>
        <br/>
        <span className="font-dancing fs-4"> -Dave Meurer </span>
      </p>
      <Row className="justify-content-md-evenly">
        <Col md="4" className="mb-4">
          <img src={cewe} alt="cewe" className="rounded w-100" />
          <div className="mt-2 text-center">
            <h3 className="font-dancing about-name">Shalma Ayu Shafira</h3>
            <p className="font-playfair about-description">
              The eldest daughter of Mr. Rinto Moedji R. <br /> & Mrs. Mas Siti
              Hassanah Susijanti
            </p>
          </div>
        </Col>
        <Col md="4" className="mb-4">
          <img src={cowo} alt="cowo" className="rounded w-100" />
          <div className="mt-2 text-center">
            <h3 className="font-dancing about-name">Muhammad Kevin</h3>
            <p className="font-playfair about-description">
              The youngest son of Mr. Dadan Suwardan <br /> & Mrs. Sri Handiyani
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
