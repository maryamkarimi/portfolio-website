import React from 'react';
import './Work.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import data from '../../assets/content/work.json';
import ProjectSkills from '../ProjectsSkills/ProjectSkills';

function WorkExperience() {
  return (
          <Container>
              <Row>
                  <Container>
                      <Row>
                          <a href="https://www.autodatasolutions.com" rel="noopener noreferrer" target="_blank">
                              <h4 className="title-link font-weight-bolder">Autodata Solutions, London, Canada</h4>
                          </a>
                      </Row>
                      <Row>
                          <h5>Software Development Internship</h5>
                      </Row>
                      {data.description.map((line) => (
                              <Row>
                                  <h5>
                                      •
                                      {' '}
                                      {line}
                                  </h5>
                              </Row>
                      ))}
                      <ProjectSkills data={data}/>
                  </Container>
              </Row>
          </Container>
  );
}

export default WorkExperience;
