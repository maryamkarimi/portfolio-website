import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup'
import sendEmail from '../../services/email'
import './ContactForm.scss'

function ContactForm() {
  const [name, setName] = useState('');
  const changeName = (value) => setName(value);

  const [email, setEmail] = useState('');
  const changeEmail = (value) => setEmail(value);

  const [content, setContent] = useState('');
  const changeContent = (value) => setContent(value);

  const isFormEmpty = () => (name.trim() === '' || content.trim() === '' || email.trim() === '');

  const [showDangerAlert, setShowDangerAlert] = useState(false);
  const displayDanger = () => {
    setShowDangerAlert(true);
    setTimeout(() => {
      setShowDangerAlert(false);
    }, 3000);
  };

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const displaySuccess = () => {
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  };

  return (
          <Form onSubmit={
              (e) => {
                  e.preventDefault()
                  sendEmail({ email, name, content })
                  .then(() => {
                      displaySuccess()
                  })
                  .catch(() => {
                      displayDanger()
                  })

                  setName('')
                  setEmail('')
                  setContent('')
              }
          }
          >

              <Modal.Title className=" d-block d-md-none">Get In Touch</Modal.Title>

              <Form.Group controlId="formBasicEmail">
                  <Form.Control
                          type="text"
                          value={name}
                          placeholder="Your Name"
                          onChange={
                              (e) => {
                                  e.preventDefault()
                                  changeName(e.target.value)
                              }
                          }
                  />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                  <Form.Control
                          type="email"
                          value={email}
                          placeholder="Your Email"
                          onChange={
                              (e) => {
                                  e.preventDefault()
                                  changeEmail(e.target.value)
                              }
                          }
                  />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                  <Form.Control
                          as="textarea"
                          rows="4"
                          type="text"
                          value={content}
                          placeholder="Your Message"
                          onChange={
                              (e) => {
                                  e.preventDefault()
                                  changeContent(e.target.value)
                              }
                          }
                  />
              </Form.Group>

              <Modal.Footer as={ListGroup}>
                  <button className="submit-btn" type="submit" disabled={isFormEmpty()}>
                      Send
                  </button>
                  <Alert variant="success" show={showSuccessAlert}>
                      Thanks for leaving me a message!
                  </Alert>
                  <Alert variant="danger" show={showDangerAlert}>
                      Please try again later!
                  </Alert>
              </Modal.Footer>
          </Form>

  );
}

export default ContactForm;
