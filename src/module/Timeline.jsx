import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { Container } from 'react-bootstrap';
import { BsFillHeartFill } from 'react-icons/bs';
import 'react-vertical-timeline-component/style.min.css';
import { first_date, engagement, wedding } from '../assets'

function Timeline() {
  return (
    <Container className="mb-5">
      <h2 className="font-playfair text-center">Our Story</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(230, 175, 83)', color: '#fff' }}
          className="font-playfair"
          icon={<BsFillHeartFill />}
        >
          <img
            src="https://www.osceolaschools.net/cms/lib/FL50000609/Centricity/Shared/Images/EagerStudents.jpg"
            alt="student"
            className="photo-timeline mb-4"
          />
          <h3 className="vertical-timeline-element-title fw-bold ">
            How We Meet
          </h3>
          <h5 className="vertical-timeline-element-subtitle ">Bandung, 2006</h5>
          <p>We are on a same elementary school</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="font-playfair"
          iconStyle={{ background: 'rgb(230, 175, 83)', color: '#fff' }}
          icon={<BsFillHeartFill />}
        >
          <img
            src={first_date}
            alt="First Date"
            className="photo-timeline mb-4"
          />
          <h3 className="vertical-timeline-element-title fw-bold ">
            How We Meet (Again)
          </h3>
          <h5 className="vertical-timeline-element-subtitle ">Bandung, 2016</h5>
          <p>We meet again on Elementary School Reunion</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="font-playfair"
          iconStyle={{ background: 'rgb(230, 175, 83)', color: '#fff' }}
          icon={<BsFillHeartFill />}
        >
          <img
            src={first_date}
            alt="First Date"
            className="photo-timeline mb-4"
          />
          <h3 className="vertical-timeline-element-title fw-bold ">
            First Date
          </h3>
          <h5 className="vertical-timeline-element-subtitle ">Bandung, 2016</h5>
          <p>We are on a same elementary school</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="font-playfair"
          iconStyle={{ background: 'rgb(230, 175, 83)', color: '#fff' }}
          icon={<BsFillHeartFill />}
        >
          <img
            src={engagement}
            alt="First Date"
            className="photo-timeline mb-4"
          />
          <h3 className="vertical-timeline-element-title fw-bold ">
            Engagement
          </h3>
          <h5 className="vertical-timeline-element-subtitle ">Bandung, 2021</h5>
          <p>We are on a same elementary school</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="font-playfair"
          iconStyle={{ background: 'rgb(230, 175, 83)', color: '#fff' }}
          icon={<BsFillHeartFill />}
        >
          <img
            src={wedding}
            alt="First Date"
            className="photo-timeline mb-4"
          />
          <h3 className="vertical-timeline-element-title fw-bold ">
            Wedding Day
          </h3>
          <h5 className="vertical-timeline-element-subtitle ">Bandung, 2022</h5>
          <p>We are on a same elementary school</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}

export default Timeline;
