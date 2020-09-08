import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './About.scss';
import Col from 'react-bootstrap/Col';
import image from './about.jpeg';

function About() {
  const aboutText = () => (
    <div>
      <h4>
        Hello! My name is Maryam.
        I&apos;m a fullstack software developer
        and a 4th year Computer Science student at Western University.
      </h4>
      <h4>
        I started programming when I was 12 years old. When I was 14,
        my friends would ask me to design and build themes for their blogs. I joined a
        robotic team when I was 15 years old and built/programmed junior soccer robots
        for three years.
      </h4>
      <h4>
        I&apos;ve always had a strong passion for programming.
        After I graduated from highschool, I moved to Canada to pursue a degree in Computer Science.
      </h4>
      <h4>
        I&apos;m open to opportunities upon my graduation in May 2021.
      </h4>
    </div>
  );
  return (
    <Container id="about">
      <Row className="display-flex">
          <Col
              xs={{offset: 1, span: 10}}
              md={{offset: 0, span: 11}}
              lg={{span: 7}}
              className=""
          >
              <h2>About Me</h2>
              {aboutText()}
          </Col>
          <Col xs={12} lg={5} id="about-image-container">
              <div id="about-image-frame">
                  <img id="about-image" src={image} alt="maryamkarimi"/>
              </div>
          </Col>
      </Row>
    </Container>
  );
}

export default About;
