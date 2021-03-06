import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ceremony, reception } from '../assets';
import { BsFillCalendarEventFill, BsFillMapFill } from 'react-icons/bs';

function Place() {
  const eventDate = 'Sunday, 20 February 2022';
  const eventPlace = 'Dapoer Paberik Badjoe';
  const mapsUrl =
    'https://www.google.com/maps/place/Badjoe+mills+Factory+Outlet/@-6.9460052,107.6364606,17z/data=!3m2!4b1!5s0x2e68e869939c6235:0x5b795162bc6d41e7!4m5!3m4!1s0x2e68e8698efedb29:0x49a7a9741606395b!8m2!3d-6.9460052!4d107.6386493';
  const calendarUrl =
    'https://calendar.google.com/event?action=TEMPLATE&tmeid=NmwzdnFtZG83czZkYTVjZG1tam1ubGgxZ2YgbXVoYW1tYWRrZXZpbnBmQG0&tmsrc=muhammadkevinpf%40gmail.com';
  return (
    <Container className="font-playfair px-4">
      <h2 className="text-center">
        <span>You Are Invited</span>
      </h2>
      <h2 className="text-center font-dancing">{eventDate}</h2>
      <Row className="justify-content-center my-5">
        <Col md={{ span: 5, offset: 1 }} className="pb-4 place-container">
          <img src={ceremony} alt="ceremony" className="w-100 h-100 rounded" />
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
          <h3 className="fw-bold">Wedding Ceremony</h3>
          <p>{eventDate}</p>
          <p>09.00 WIB - 11.00 WIB</p>
          <p>{eventPlace}</p>
          <p>Jl. Soekarno-Hatta No.573, Bandung</p>
          <Button variant="warning" className=" bgcolor-cream">
            <a href={mapsUrl} target="_blank" rel="noreferrer noopener">
              <BsFillMapFill className="align-middle me-2" />
              <span className="align-middle fw-bold">View on Map</span>
            </a>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col
          sm={{ order: 1 }}
          md={{ span: 5, offset: 1, order: 2 }}
          className="pb-4 place-container"
        >
          <img
            src={reception}
            alt="reception"
            className="w-100 h-100 rounded"
          />
        </Col>
        <Col sm={{ order: 2 }} md={{ span: 5, offset: 1, order: 1 }}>
          <h3 className="fw-bold">Wedding Reception</h3>
          <p>{eventDate}</p>
          <p>11.00 WIB - 14.00 WIB</p>
          <p>{eventPlace}</p>
          <p>Jl. Soekarno-Hatta No.573, Bandung</p>
          <Button
            variant="warning"
            className="bgcolor-cream my-2 d-flex align-items-center"
          >
            <a
              href={calendarUrl}
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <BsFillCalendarEventFill className="me-2" />
              <span className="align-middle fw-bold">
                Add to Google Calendar
              </span>
            </a>
          </Button>
          <div className="d-flex">
            <Button variant="warning" className="bgcolor-cream">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                <BsFillMapFill className="align-middle me-2" />
                <span className="align-middle fw-bold">View on Map</span>
              </a>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Place;
