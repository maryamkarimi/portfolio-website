import React from 'react';
import './MainPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from './SideBar/SideBar';
import Intro from './Intro/Intro';
import Banner from './Banner/Banner';
import image from './background.jpg';
import Timeline from './Timeline/Timeline';
import Projects from './Projects/Projects';
import ContactForm from './Contact/ContactForm';

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
          <Banner image={image} height={400} />
        </Row>
        <Row className="timeline">
          <Col md={1} lg={0} />
          <Col sm={12} md={11} xl={12}>
            <Timeline />
          </Col>
        </Row>
      </Container>

      <div className="projects">
        <Projects />
        <Row className="d-none d-md-block">
          <h6 className="text-center">
            Designed and Built by Maryam Karimi
          </h6>
        </Row>
      </div>

      <Container fluid className="footer">
        <Row bsPrefix="d-block d-md-none">
          <Container className="bottom-contact-form">
            <ContactForm />
          </Container>
          <SideBar type="bottom-contact" iconColor="#0e2235" />
        </Row>
        <Row className="justify-content-center d-md-none">
          <h6>
            Designed and Built by Maryam Karimi
          </h6>
        </Row>
      </Container>
    </div>
  );
}

export default MainPage;
