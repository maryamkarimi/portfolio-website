import React from 'react';
import Container from 'react-bootstrap/Container';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import autodata from '../../assets/content/autodata.json';
import shopify from '../../assets/content/shopify.json';
import highschool from '../../assets/content/highschool.json';
import university from '../../assets/content/university.json';
import TimelineItem from '../TimelineItem/TimelineItem';
import './Timeline.scss';
import Icon from '../../assets/logos';

function Timeline() {
  return (
      <Container fluid>
          <VerticalTimeline>
              <VerticalTimelineElement
                  contentArrowStyle={{ borderRight: '7px solid #343a40' }}
                  date="2012-2016"
                  icon={<Icon name="highschool" />}
              >
                  <TimelineItem data={highschool} />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                  contentArrowStyle={{ borderRight: '7px solid #343a40' }}
                  date="2017 - 2021"
                  icon={<Icon name="university" />}
              >
                  <TimelineItem data={university}>
                      <Row>
                          <Link to="/courses">
                              <button type="button" className="learn-more">
                                  <span className="circle">
                                      <span className="icon arrow" />
                                  </span>
                                  <h6 className="button-text">See courses and grades</h6>
                              </button>
                          </Link>
                      </Row>
                  </TimelineItem>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                  contentArrowStyle={{ borderRight: '7px solid #343a40' }}
                  date="2019 - 2020"
                  icon={<Icon name="autodata" />}
              >
                  <TimelineItem data={autodata} />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                  contentArrowStyle={{ borderRight: '7px solid #343a40' }}
                  date="2021 - 2021"
                  icon={<Icon name="shopify" />}
              >
                  <TimelineItem data={shopify} />
              </VerticalTimelineElement>

          </VerticalTimeline>
      </Container>
  );
}

export default Timeline;
