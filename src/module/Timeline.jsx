import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { Container } from 'react-bootstrap';
import { BsFillHeartFill } from 'react-icons/bs';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
  return (
    <Container className="mb-5">
      <h2 className="font-playfair text-center">Our Story</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          className="font-playfair"
          icon={<BsFillHeartFill />}
        >
          <img
            src="https://www.osceolaschools.net/cms/lib/FL50000609/Centricity/Shared/Images/EagerStudents.jpg"
            alt="student"
            className="img-fluid mb-4 rounded"
          />
          <h3 className="vertical-timeline-element-title fw-bold ">
            How We Meet
          </h3>
          <h5 className="vertical-timeline-element-subtitle ">Bandung, 2006</h5>
          <p>We are on a same elementary school</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BsFillHeartFill />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BsFillHeartFill />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}

export default Timeline;
