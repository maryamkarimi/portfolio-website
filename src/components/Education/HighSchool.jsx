import React from 'react';
import './Education.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import data from '../../data/highschool.json';
import ProjectSkills from '../ProjectsSkills/ProjectSkills';

function HighSchool() {
  return (
    <Container className="education">
      <Row>
        <Container>
          <Row>
            <h4 className="font-weight-bolder">Farzanegan Highschool (NODET), Tehran, Iran</h4>
            <h5>
              National Organization for Development of Exceptional Talents (NODET) is
              an organization that recruits students for middle and highschools through a
              two-step set of exams. The organization is aimed to provide a unique
              educational environment for the exceptionally talented students.
            </h5>
            <h5>
              GPA: 4.0
            </h5>
          </Row>
          <ProjectSkills data={data}/>
        </Container>
      </Row>

    </Container>
  );
}

export default HighSchool;
