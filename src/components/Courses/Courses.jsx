import React from 'react';
import './Courses.scss';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import data from '../../data/courses.json';

function Courses() {
  return (
    <div id="courses">
      <Container id="courses-container">
        <Row id="courses-header">
          <h2 id="courses-title">
            List of Courses
          </h2>
          <h2>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </h2>
        </Row>
        <Row>
          <Table id="courses-table" size="sm" responsive>
            <thead>
              <tr>
                <th>Course Number</th>
                <th>Course Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {data.courses.map((course) => (
                <tr>
                  {course.school === 'uwo'
                  && (
                  <td>
                    <a href={`https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=${course.schoolId}`}>{course.id}</a>
                  </td>
                  )}
                  {course.school !== 'uwo'
                  && <td>{course.id}</td>}
                  <td>{course.name}</td>
                  <td>{course.grade}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default Courses;
