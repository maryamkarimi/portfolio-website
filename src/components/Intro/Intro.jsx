import React from 'react';
import './Intro.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Intro() {
  return (
    <div id="App">
      <Container fluid>
        <Row className="intro-container">
          <Col xs={{ offset: 1 }}>
            <h5 className="intro-mynameis animate__animated">
              Hi, my name is
            </h5>
            <h1 className="name font-weight-bold animate__animated">
              Maryam Karimi
            </h1>
            <div className="intro">
              <h5>
                I&apos;m a fullstack software developer based in London, Ontario.
              </h5>
              <h5>
                I&apos;m currently completing my last year of Honors Specialization
                in Computer Science at Western University. I&apos;m open to
                opportunities upon my graduation in May 2021.
              </h5>
            </div>

            <a href="/resume.pdf" className="resume-btn">
              Resume
            </a>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
