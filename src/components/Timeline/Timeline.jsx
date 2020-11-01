import React from 'react';
import Container from 'react-bootstrap/Container';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import University13 from '../Education/University1-3';
import WorkExperience from '../Work/WorkExperience';
import HighSchool from '../Education/HighSchool';
import University4 from '../Education/University4';
import './Timeline.scss';

function Timeline() {
  return (
      <Container fluid>
          <VerticalTimeline>
              <VerticalTimelineElement
                  contentArrowStyle={{ borderRight: '7px solid #343a40' }}
                  date="2012-2016"
                  iconStyle={{ background: '#fff' }}
                  icon={<FontAwesomeIcon icon={faSchool} size="2x" color="#343a40" />}
              >
                  <HighSchool />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                  contentArrowStyle={{ borderRight: '7px solid #343a40' }}
                  date="2017 - 2019"
                  iconStyle={{ background: '#fff' }}
                  icon={<FontAwesomeIcon icon={faGraduationCap} size="2x" color="#343a40" />}
              >
                  <University13 />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                  contentArrowStyle={{ borderRight: '7px solid #343a40' }}
                  date="2019 - 2020"
                  iconStyle={{ background: '#fff' }}
                  icon={<FontAwesomeIcon icon={faLaptopCode} size="2x" color="#343a40" />}
              >
                  <WorkExperience />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                  contentArrowStyle={{ borderRight: '7px solid #343a40' }}
                  date="2020 - 2021"
                  iconStyle={{ background: '#fff' }}
                  icon={<FontAwesomeIcon icon={faGraduationCap} size="2x" color="#343a40" />}
              >
                  <University4 />
              </VerticalTimelineElement>

          </VerticalTimeline>
      </Container>
  );
}

export default Timeline;
