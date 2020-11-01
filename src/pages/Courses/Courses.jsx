import React from 'react';
import './Courses.scss';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import data from '../../assets/content/courses.json';
import SideBar from '../../components/SideBar/SideBar';

function Courses() {
  return (
      <div>
          <div id="courses">
              <Container id="courses-container">
                  <Row id="courses-header">
                      <Col xs={{ span: 10 }} sm={{ span: 11 }}>
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
                      <Col xs={{ span: 12 }}>
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
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={`https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=${course.schoolId}`}
                                                    >
                                                        <h5>
                                                            {course.id}
                                                        </h5>
                                                    </a>
                                                </td>
                                                )}
                                          {course.school !== 'uwo'
                                                && <td><h5>{course.id}</h5></td>}
                                          <td><h5>{course.name}</h5></td>
                                          <td><h5>{course.grade}</h5></td>
                                      </tr>
                                  ))}
                              </tbody>
                          </Table>
                      </Col>
                  </Row>
                  <div className="courses-footer">
                      <SideBar type="bottom-contact" iconColor="#0e2235" />
                      <h6 className="text-center">
                          Designed and Built by Maryam Karimi
                      </h6>
                  </div>
              </Container>
          </div>

      </div>

  );
}

export default Courses;
