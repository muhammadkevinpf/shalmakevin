import React from 'react';
import { Container } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero d-flex flex-column justify-content-center align-items-center" id="hero">
      <p className="font-playfair text-white paragraph-headline">
        The Wedding of
      </p>
      <h1 className="font-dancing text-white main-headline">
        Shalma <span className="color-cream">&</span> Kevin
      </h1>
    </div>
  );
}

export default Hero;
