import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ContactForm from './ContactForm';
import './ContactModal.scss';
import PropTypes from 'prop-types';

function ContactModal({ show, handleClose }) {
  return (
    <Modal
      className="d-none d-md-block"
      centered
      show={show}
      onHide={
                () => {
                  handleClose();
                }
            }
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">Get In Touch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm />
      </Modal.Body>
    </Modal>
  );
}

ContactModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ContactModal;
