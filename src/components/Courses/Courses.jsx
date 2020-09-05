import React from 'react';
import './Courses.scss';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import data from '../../data/courses.json';

function Courses() {
  return (
    <div id="courses">
      <Container id="courses-container">
        <Row id="courses-header">
          <Col xs={{ offset: 1, span: 9 }}>
            <h2>
              List of Courses
            </h2>
          </Col>
          <Col>
            <h2>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </h2>
          </Col>

        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 10 }}>
            <Table id="courses-table">
              <thead>
                <tr>
                  <th><h6 className="font-weight-bold">Course Number</h6></th>
                  <th><h6 className="font-weight-bold">Course Name</h6></th>
                  <th><h6 className="font-weight-bold">Grade</h6></th>
                </tr>
              </thead>
              <tbody>
                {data.courses.map((course) => (
                  <tr>
                    {course.school === 'uwo'
                    && (
                    <td>
                      <a href={`https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=${course.schoolId}`}>
                        <h6>
                          {course.id}
                        </h6>
                      </a>
                    </td>
                    )}
                    {course.school !== 'uwo'
                    && <td><h6>{course.id}</h6></td>}
                    <td><h6>{course.name}</h6></td>
                    <td><h6>{course.grade}</h6></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Courses;
