import React from 'react';
import './MainPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from '../../components/SideBar/SideBar';
import Intro from '../../components/Intro/Intro';
import Banner from '../../components/Banner/Banner';
import image from '../../assets/images/background.jpg';
import Timeline from '../../components/Timeline/Timeline';
import Projects from '../../components/Projects/Projects';
import ContactForm from '../../components/Contact/ContactForm';
import About from '../../components/About/About';

function MainPage() {
  return (
      <div>
          <Intro />
          <Container className="main" fluid>
              <Row className="d-none d-md-block">
                  <Col md={1}>
                      <SideBar type="side-contact" iconColor="#0e2235" />
                  </Col>
              </Row>
              <Row>
                  <Banner image={image} />
              </Row>
          </Container>

          <Row className="timeline">
              <Col xs={12} md={{ offset: 1, span: 10 }} xl={{ offset: 0, span: 12 }}>
                  <About />
                  <Timeline />
              </Col>
          </Row>

          <div id="projects">
              <Row className="d-none d-md-block">
                  <h6 className="text-center">
                      Designed and Built by Maryam Karimi
                  </h6>
              </Row>
          </div>

          <Container fluid id="footer">
              <Row bsPrefix="d-block d-md-none">
                  <Container className="bottom-contact-form">
                      <ContactForm />
                  </Container>
                  <SideBar type="bottom-contact" iconColor="#0e2235" />
              </Row>
              <Row className="justify-content-center d-md-none">
                  <h6 className="copyright">
                      Designed and Built by Maryam Karimi
                  </h6>
              </Row>
          </Container>
      </div>
  );
}

export default MainPage;
