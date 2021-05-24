import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import ProjectSkills from '../ProjectsSkills/ProjectSkills';
import './TimelineItem.scss';

// eslint-disable-next-line react/prop-types
function TimelineItem({ data, children }) {
  return (
      <Container className="timeline-item">
          <Row>
              <Container>
                  <Row>
                      <a href={data.website} rel="noopener noreferrer" target="_blank">
                          <h4 className="title-link font-weight-bolder">
                              {data.name}
                          </h4>
                      </a>
                  </Row>
                  {data.description.map((line) => (
                      <Row>
                          <h5>
                              {line}
                          </h5>
                      </Row>
                  ))}
                  <ProjectSkills projects={data.projects} skills={data.skills} />
                  {children}
              </Container>
          </Row>

      </Container>
  );
}

TimelineItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(
      PropTypes.string,
    ),
    projects: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, description: PropTypes.string }),
    ),
    skills: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string }),
    ),
  }).isRequired,
};

export default TimelineItem;
