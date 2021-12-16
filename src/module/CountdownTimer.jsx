import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const countDownDate = new Date('Feb 20, 2022 09:00:00').getTime();
  // eslint-disable-next-line no-unused-vars
  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const timeleft = countDownDate - now;

    setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
  }, 1000);

  return (
    <Container className="text-center font-playfair">
      <h2 >Time Left Until Event</h2>
      <Row className="justify-content-center my-5 py-3">
        <Col xs="3" md="2" >
          <h3 >{days}</h3>
          <span className="fw-bold">Days</span>
        </Col>
        <Col xs="3" md="2">
          <h3>{hours}</h3>
          <span className="fw-bold">Hours</span>
        </Col>
        <Col xs="3" md="2">
          <h3>{minutes}</h3>
          <span className="fw-bold">Minutes</span>
        </Col>
        <Col xs="3" md="2">
          <h3>{seconds}</h3>
          <span className="fw-bold">Seconds</span>
        </Col>
      </Row>
    </Container>
  );
}

export default CountdownTimer;
