import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Projects.scss';
import Col from 'react-bootstrap/Col';
import data from '../../data/projects.json';
import ProjectCard from './ProjectCard';
import FlipCardProjectDescription from './FlipCardProjectDescription';

function Projects() {
  return (
    <Container fluid className="projects-container">
      <Container fluid>
        <Row>
          <Col
            xs={{ offset: 1, span: 11 }}
            md={{ offset: 1, span: 10 }}
            lg={{ offset: 2 }}
          >
            <h2>Featured Projects</h2>
            <Row className="display-flex">
              {data.projects.map((project) => (
                <Col key={project.name} xs={11} md={6} lg={5} className="project">
                  <div className="d-block d-lg-none fill">
                    <ProjectCard
                      projectName={project.name}
                      projectDescription={project.description}
                      projectContributions={project.contributions}
                      languages={project.languages}
                      gitHubURL={project.git}
                    />
                  </div>
                  <div key={project.name} className="d-none d-lg-flex fill">
                    <FlipCardProjectDescription
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
