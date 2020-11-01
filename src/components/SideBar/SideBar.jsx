import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import ContactModal from '../Contact/ContactModal';
import contactInfo from '../../assets/content/contact.json';
import './SideBar.scss';

function SideBar({ type, iconColor }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div className={type}>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <a className="d-none d-md-block" onClick={handleShow}>
              <FontAwesomeIcon
                  className="icon animate__animated animate__delay-1s animate__rotateInDownRight"
                  icon={faPenSquare}
                  size="2x"
                  color={iconColor}
              />
          </a>

          <a href={`mailto:${contactInfo.email}`}>
              <FontAwesomeIcon
                  className="icon animate__animated animate__delay-2s animate__rotateInDownLeft"
                  icon={faEnvelopeSquare}
                  size="2x"
                  color={iconColor}
              />
          </a>

          <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                  className="icon animate__animated animate__delay-3s animate__rotateInDownRight"
                  icon={faLinkedin}
                  size="2x"
                  color={iconColor}
              />
          </a>

          <a href={contactInfo.gitHub} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                  className="icon animate__animated animate__delay-4s animate__rotateInDownLeft"
                  icon={faGithubSquare}
                  size="2x"
                  color={iconColor}
              />
          </a>

          <ContactModal handleClose={handleClose} show={show} />
      </div>
  );
}

SideBar.propTypes = {
  type: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
};

export default SideBar;
