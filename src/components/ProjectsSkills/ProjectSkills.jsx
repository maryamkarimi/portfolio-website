import React from 'react';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import './ProjectSkills.scss';

function ProjectSkills({ data }) {
  return (
    <Row className="row-no-padding">
      <Col md={12} xl={6}>
        <h5 className="font-weight-bolder">
          Projects:
        </h5>
        <h5>
          {data.projects.map((project) => (
            <Badge key={project.name} pill variant="dark">{project.name}</Badge>
          ))}
        </h5>
      </Col>
      <Col md={12} xl={6}>
        <h5 className="font-weight-bolder">
          Skills Learned:
        </h5>
        <h5>
          {data.skills.map((skill) => <Badge key={skill.name} pill variant="dark">{skill.name}</Badge>)}
        </h5>
      </Col>
    </Row>
  );
}

ProjectSkills.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    skills: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  }).isRequired,
};

export default ProjectSkills;
