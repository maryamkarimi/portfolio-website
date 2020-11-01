import React from 'react';
import './Education.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function University13() {
  return (
          <Container className="education">
              <Row>
                  <Container>
                      <Row>
                          <a href="https://www.uwo.ca" rel="noopener noreferrer" target="_blank">
                              <h4 className="title-link font-weight-bolder">
                                  University of Western Ontario, London,
                                  Canada
                              </h4>
                          </a>
                      </Row>
                      <Row>
                          <h5>
                              Graduating May 2021
                          </h5>
                      </Row>
                  </Container>
              </Row>

          </Container>
  );
}

export default University13;
