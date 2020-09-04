import React from 'react';
import './Projects.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import gm from './gm.jpg';
import resources from './resources.jpg';
import robots from './robots.jpeg';
import courses from './courses.png';
import portfolio from './portfolio.png';
import cpp from './c++.png';

function FlipCardProjectDescription({
  projectName, projectDescription, languages, gitHubURL,
}) {
  const image = () => {
    if (projectName === 'IOM') {
      return gm;
    }

    if (projectName === 'Resource Management') {
      return resources;
    }

    if (projectName === 'Junior Soccer Robots') {
      return robots;
    }

    if (projectName === 'Course Management') {
      return courses;
    }

    if (projectName === 'Portfolio Website') {
      return portfolio;
    }

    if (projectName === 'System Info') {
      return cpp;
    }

    return '';
  };

  const cardStyle = {
    backgroundImage: `url(${image()})`,
    opacity: 0.7,
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" style={cardStyle} />
        <div className="flip-card-back">
          {gitHubURL !== ''
          && (
          <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
            <h4 className="font-weight-bolder d-inline">
              {projectName}
            </h4>
          </a>
          )}
          {gitHubURL === ''
          && (
          <h4 className="font-weight-bolder d-inline">
            {projectName}
          </h4>
          )}

          <div className="card-title">
            {projectDescription.split('\n').map((line) => (<h5>{line}</h5>))}
          </div>
          <div className="flip-card-footer">
            <div className="flip-card-footer-div">
              {languages.map((type) => (
                <h6 className="lang">
                  {type}
                </h6>
              ))}
            </div>
            <div className="flip-card-footer-div">
              {gitHubURL !== ''
              && (
              <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" icon={faGithub} color="#97a0ba" />
              </a>
              )}
            </div>

          </div>
        </div>
      </div>
      {/* <Card bg="dark" border="light"> */}
      {/*    <Card.Body > */}
      {/*        */}
      {/*        <Card.Subtitle className="flip-card-back"> */}
      {/*            /!*<div className="project-name-container icon">*!/ */}
      {/*            /!*    <h4 className="font-weight-bolder d-inline">*!/ */}
      {/*            /!*        {projectName}*!/ */}
      {/*            /!*    </h4>*!/ */}
      {/*            /!*</div>*!/ */}
      {/*           */}
      {/*        </Card.Subtitle> */}
      {/*    </Card.Body> */}
      {/* </Card> */}
    </div>
  );
}

FlipCardProjectDescription.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  gitHubURL: PropTypes.string,
};

FlipCardProjectDescription.defaultProps = {
  projectName: '',
  projectDescription: '',
  gitHubURL: '',
};

export default FlipCardProjectDescription;
