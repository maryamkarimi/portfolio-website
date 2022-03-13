import React from 'react';
import './Intro.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Intro() {
  return (
      <div id="App">
          <Container fluid>
              <Row id="intro-container">
                  <Col id="intro-text" xs={{ offset: 1 }} xl={{ offset: 2 }}>
                      <h5 className="intro-mynameis animate__animated">
                          Hi, my name is
                      </h5>
                      <h1 className="name font-weight-bold animate__animated">
                          Maryam Karimi
                      </h1>
                      <div className="intro">
                          <h5>
                              I&apos;m a software developer at Google.
                          </h5>
                          <h5>
                              I&apos;ve recently completed an Honors Specialization in
                              Computer Science at Western University and currently live in Waterloo, Ontario.
                          </h5>
                      </div>
                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default Intro;
