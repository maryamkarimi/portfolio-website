import React from 'react';
import './Projects.scss';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gm from '../../assets/images/gm.jpg';
import resources from '../../assets/images/resources.jpg';
import robots from '../../assets/images/robots.jpg';
import courses from '../../assets/images/courses.png';
import portfolio from '../../assets/images/portfolio.png';
import sysinfo from '../../assets/images/sysinfo.png';

function ProjectCard({
  projectName, projectDescription, languages, gitHubURL,
}) {
  const imageLookup = {
    IOM: gm,
    'Resource Management': resources,
    'Junior Soccer Robots': robots,
    'Course Management': courses,
    'Portfolio Website': portfolio,
    'System Info': sysinfo,
  };

  return (
      <Card className="regular-card" bg="dark">
          <div className="img-div">
              <Card.Img src={imageLookup[projectName]} />
          </div>
          <Card.Body className="regular-card-body">
              <div>
                  {gitHubURL !== '' && (
                      <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
                          <h4 className="font-weight-bolder d-inline">
                              {projectName}
                          </h4>
                      </a>
                  )}
                  {gitHubURL === '' && (
                      <h4 className="font-weight-bolder d-inline">
                          {projectName}
                      </h4>
                  )}
                  {projectDescription.split('\n').map((line) => (<h5>{line}</h5>))}
              </div>
          </Card.Body>

          <div className="regular-card-footer">
              <div className="regular-card-langs">
                  {languages.map((type) => (
                      <h6 className="lang">
                          {type}
                      </h6>
                  ))}
              </div>
              {gitHubURL !== '' && (
                  <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon className="icon" icon={faGithub} color="#97a0ba" />
                  </a>
              )}
          </div>
      </Card>
  );
}

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  gitHubURL: PropTypes.string,
};

ProjectCard.defaultProps = {
  projectName: '',
  projectDescription: '',
  gitHubURL: '',
};

export default ProjectCard;
