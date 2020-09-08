import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Projects.scss';
import Col from 'react-bootstrap/Col';
import data from '../../data/projects.json';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <Container fluid className="projects-container">
      <Container fluid>
        <Row>
          <Col
              xs={12}
              md={{offset: 1, span: 10}}
          >
            <h2 id="projects-title">Featured Projects</h2>
            <Row className="display-flex">
              {data.projects.map((project) => (
                  <Col key={project.name} xs={12} md={6} xl={4} className="project">
                    <div className="fill">
                      <ProjectCard
                          projectName={project.name}
                          projectDescription={project.description}
                          projectContributions={project.contributions}
                          languages={project.languages}
                          gitHubURL={project.git}
                      />
                    </div>
                  </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
